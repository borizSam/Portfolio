output "instance_id" {
  value = aws_instance.portfolio_server.id
}

output "public_ip" {
  value = aws_instance.portfolio_server.public_ip
}