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
  access_key = "ASIARL7AWOA42PTQPI5E"
  secret_key = "0GXh+LlmayIdkkO6u5J+dGeGTv0nAIHPRbf6J7Iw"
  token      = "FwoGZXIvYXdzEOL//////////wEaDIylqBwE3DTPE+4NRyLXAbs0QFqhXwUcBA7T/Z/HuhZvT40BPcQc8/8FURw5v2D2XEWpoK3zaBjbdEg3Bz7mfsk0OsRnqXxsCcqpqd83hoFH4LMcTzOedhrGoTdtspfT2gWsVAeyKaeqCOvfJfaor30BwMjYH8FEPAt+OB8bDqW0ut019kitE5Gsr0aAIJGnwlQ/JEJTXGqFgBCWMK2GXDwGjQYT3iyyatxqyhi4qP/Ucb5oFeAY3LCJzETar9jsXZQi7XUc15WqGG9OhFAotqUwUtzELNODLXQ0ZY0hUf7Y8+7Xu1+/KIGEua4GMi26XaTuBlolaLuGET5h66F5CnzKL9yrfEIO9dI0Xuq/99psjhhaAgHqALQQV8w="
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
