terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">= 3.0.0"
    }
  }
}

provider "aws" {
  region     = "us-east-1"
  access_key = "ASIARL7AWOA4WTUAL5OE"
  secret_key = "UzAVqrW4qIZgC4Fmht0RkM1hfZfvN5ninSiWz+0y"
  token      = "FwoGZXIvYXdzEN7//////////wEaDCT2kHOrbIniBSyJESLXAXXFCZvR393UcgVJFP38xswV9cxhYNaShsERU3QvEAxWNOz7UhW7h3OfYCYFtTDy9k0jM+g23mavcM/DYzf763u5Xhci0uLHNJmojeQTaUWDXt6Hx4qcI4i0j3YaGC4ufRCQdYWRLptQUecLURyD07HBrfk9YD+5DsuY+JswD+1NGGlGQ0Hxrdr47Q0GRSvw30f7EPMwjGJRqj09zeM1mPSQMEmElgLLrSMjVI9ErZtVNlJm3Xt2AQ1+PJXD7kZQRIuYVFxgMVFypi9TlWsOI7PrD+jXMr2+KJSHuK4GMi3pPSxqwV3CJM5Iw1dpqqcDxTRw3aT6cySXYGTR74Sj4BeAhv+oAry22sNTaBU="
}

# Create the VPC
resource "aws_vpc" "my_vpc" {
  cidr_block = "10.0.0.0/16"
  
  tags = {
    Name = "MyVPC"
  }
}

# Create a public subnet in the VPC
resource "aws_subnet" "public_subnet" {
  vpc_id            = aws_vpc.my_vpc.id
  cidr_block        = "10.0.1.0/24"
  map_public_ip_on_launch = true

  lifecycle {
    ignore_changes = [map_public_ip_on_launch]
  }

  tags = {
    Name = "PublicSubnet"
  }
}

# Create a private subnet in the VPC
resource "aws_subnet" "private_subnet" {
  vpc_id            = aws_vpc.my_vpc.id
  cidr_block        = "10.0.2.0/24"

  tags = {
    Name = "PrivateSubnet"
  }
}

# Resource Definitions
resource "aws_instance" "Instance-1" {
  ami           = "ami-0c7217cdde317cfec"
  instance_type = "t2.micro"
  subnet_id     = aws_subnet.public_subnet.id
  associate_public_ip_address = true

  key_name      = "vockey"

  tags = {
    Name = "MyInstance"
  }
}

# Define a security group for the EC2 instance
resource "aws_security_group" "public_ec2_sg" {
  vpc_id = aws_vpc.my_vpc.id

  # Allow inbound HTTP traffic (port 80) from anywhere
  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # Allow inbound SSH traffic (port 22) from your IP address
  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["100.25.151.34/32"]
  }

  # Allow outbound traffic to anywhere
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "PublicEC2SecurityGroup"
  }
}

resource "aws_s3_bucket" "my_bucket" {
  bucket = "awss3bucket24"
  # other configurations...
}
