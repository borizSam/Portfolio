terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "6.46.0"
    }
  }
}

resource "aws_instance" "portfolio_server" {
  ami           = var.ami_id
  instance_type = var.instance_type

  tags = {
    Name = var.server_name
  }
}
