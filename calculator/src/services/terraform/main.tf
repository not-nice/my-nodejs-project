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
  access_key = "ASIARL7AWOA4WJRO3C7G"
  secret_key = "aCmKXATcvoGavGbSsjrPfHvc/OTqf/Cceh6roDx3"
  token      = "FwoGZXIvYXdzEB0aDKhKQm+2CTRTjExZ6iLXAWcSKlEcpmY6VPjgU26fCPzYHGeG5zMeClEipnjODcM5jkt1DdTm0oST5bLd4RB6lsJAmcCFbmR9ZlYEOeISjcwDS6qKCOyn/ESoI+T9QnXfEa+eswB7HKbrM1e7rmJPe4FpiDcbLT/JdYHDNmU28eGy5imH4puTWv67b0iuRzWd4Lw229zUmRLfKgaD4xaKoCqxWR3khZ+eYifURJDEj+vXdbdXoEUwGilvCpBUft2X1myKNg9nhwVw4rcxbKpJ5eZkpHpqtfJyTk8Nijx+DTbEFRiNkjdhKLaM/q4GMi1mTkHC3G9fHQyxXfNye4uBYQMEhLZD3SuhwMMpsEYzp5erv2oCahQauLvg3tU="
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
  bucket = "awss3bucket56"
  # other configurations...
}
