
variable "bucket-name" {
  default = "myportfolioreactappbucket"

}


data "aws_caller_identity" "current" {}

# create s3 resource
resource "aws_s3_bucket" "reactS3Bucket" {
  bucket = var.bucket-name

  tags = {
    "env" = "dev"
  }
}

# bucket public  policy
resource "aws_s3_bucket_policy" "react_bucket_policy" {
  bucket = aws_s3_bucket.reactS3Bucket.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "PublicReadGetObject"
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource  = "${aws_s3_bucket.reactS3Bucket.arn}/*"
      }
    ]
  })
}


resource "aws_s3_bucket_website_configuration" "react-config" {
  bucket = aws_s3_bucket.reactS3Bucket.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "error.html"
  }
}

# create bucket ownership
resource "aws_s3_bucket_ownership_controls" "bucket-ownership" {
  bucket = aws_s3_bucket.reactS3Bucket.id

  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

# Public access block (Account Level)
resource "aws_s3_account_public_access_block" "block_public_access" {
  account_id = data.aws_caller_identity.current.account_id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}


# create bucket public access
resource "aws_s3_bucket_public_access_block" "bucket-public-access" {
  bucket = aws_s3_bucket.reactS3Bucket.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_acl" "bucket-acl" {
  bucket = aws_s3_bucket.reactS3Bucket.id
  acl    = "public-read"

  depends_on = [aws_s3_bucket_ownership_controls.bucket-ownership, aws_s3_bucket_public_access_block.bucket-public-access]
}

# upload react files to s3
resource "aws_s3_object" "react_files" {
  for_each = fileset("../portfolio-app/build", "**")
  bucket   = aws_s3_bucket.reactS3Bucket.id
  key      = each.value
  source   = "../portfolio-app/build/${each.value}"
  content_type = lookup(
    {
      "html" = "text/html"
      "css"  = "text/css"
      "js"   = "application/javascript"
      "png"  = "image/png"
      "jpg"  = "image/jpeg"
      "jpeg" = "image/jpeg"
      "svg"  = "image/svg+xml"
      "json" = "application/json"
      "txt"  = "text/plain"
    },
    split(".", each.value)[length(split(".", each.value)) - 1],
    "application/octet-stream" # Default Content-Type if not matched
  )

}

output "s3_bucket_id" {
  value = aws_s3_bucket.reactS3Bucket.arn
}
output "s3_bucket_web_endpoint" {
  value = aws_s3_bucket.reactS3Bucket.bucket_domain_name
}

output "s3_bucket_name" {
  value = aws_s3_bucket.reactS3Bucket.website_endpoint

}
