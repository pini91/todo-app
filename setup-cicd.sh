#!/bin/bash

echo "🚀 Setting up CI/CD Pipeline for Todo App"
echo "========================================="

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "❌ Error: Not in a git repository. Please run 'git init' first."
    exit 1
fi

# Check if we have the required files
echo "📋 Checking setup..."

required_files=(
    ".github/workflows/ci.yml"
    ".github/workflows/deploy.yml"
    ".eslintrc.json"
    "jest.config.js"
    "railway.json"
    ".env.example"
)

missing_files=()
for file in "${required_files[@]}"; do
    if [ ! -f "$file" ]; then
        missing_files+=("$file")
    fi
done

if [ ${#missing_files[@]} -ne 0 ]; then
    echo "❌ Missing required files:"
    printf '   %s\n' "${missing_files[@]}"
    exit 1
fi

echo "✅ All required files present"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Run initial checks
echo "🔍 Running initial checks..."

echo "  → ESLint check..."
npm run lint || echo "⚠️  Linting issues found - fix with 'npm run lint:fix'"

echo "  → Running tests..."
npm test || echo "⚠️  Tests failed - please review and fix"

echo ""
echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Set up Railway projects (dev & prod)"
echo "2. Configure GitHub secrets"
echo "3. Create develop branch: git checkout -b develop"
echo "4. Set up branch protection rules"
echo ""
echo "📖 See CICD_SETUP.md for detailed instructions"
