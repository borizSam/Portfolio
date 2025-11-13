output "ecr_repo" {
  value = aws_ecr_repository.repo.repository_url
}

output "cloudfront_domain" {
  value = aws_cloudfront_distribution.cdn.domain_name
}
