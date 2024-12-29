


# resource "aws_s3_bucket_website_configuration" "react-config" {
#   bucket = aws_s3_bucket.reactS3Bucket.id

#   index_document {
#     suffix = "index.html"
#   }

#   error_document {
#     key = "error.html"
#   }
# }

# # create bucket ownership
# resource "aws_s3_bucket_ownership_controls" "bucket-ownership" {
#   bucket = aws_s3_bucket.reactS3Bucket.id

#   rule {
#     object_ownership = "BucketOwnerPreferred"
#   }
# }

# # create bucket public access
# resource "aws_s3_bucket_public_access_block" "bucket-public-access" {
#   bucket = aws_s3_bucket.reactS3Bucket.id

#   block_public_acls       = false
#   block_public_policy     = false
#   ignore_public_acls      = false
#   restrict_public_buckets = false
# }

# resource "aws_s3_bucket_acl" "bucket-acl" {
#   bucket = aws_s3_bucket.reactS3Bucket.id
#   acl    = "private"
#   depends_on = [aws_s3_bucket_ownership_controls.bucket-ownership,
#   aws_s3_bucket_public_access_block.bucket-public-access]
# }
