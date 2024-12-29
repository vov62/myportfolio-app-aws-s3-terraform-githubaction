
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "5.72.1"
    }
  }
}

provider "aws" {
  region = "us-west-2"
}

module "staticWeb" {
  source = "../portfolio-app/build"
}
