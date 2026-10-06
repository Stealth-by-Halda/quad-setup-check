CI.run do
  step "Setup", "bin/setup --skip-server"
  step "Style: Ruby", "bin/rubocop"
  step "Tests: Rails", "bin/rails test"
  step "Tests: Frontend", "npm test"
  step "Types: TypeScript", "npm run typecheck"
end
