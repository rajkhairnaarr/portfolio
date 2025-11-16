#!/bin/bash
set -e

echo "🚀 Deploying Editorial Layout Changes"
echo "======================================"

# Push branch to remote
echo "📤 Pushing branch to remote..."
git push -u origin claude/editorial-shadcn-fix-01GTu19P7RYdFpJQHnbBzNUN

# Check if gh CLI is available
if command -v gh &> /dev/null; then
  echo "📝 Creating pull request..."
  gh pr create \
    --title "Editorial Layout & shadcn/ui Integration" \
    --body-file PR_DESCRIPTION.md \
    --head claude/editorial-shadcn-fix-01GTu19P7RYdFpJQHnbBzNUN

  echo "✅ Pull request created successfully!"
else
  echo "⚠️  GitHub CLI not available. Please create PR manually:"
  echo "   1. Visit: https://github.com/rajkhairnaarr/portfolio/compare/claude/editorial-shadcn-fix-01GTu19P7RYdFpJQHnbBzNUN"
  echo "   2. Use PR_DESCRIPTION.md as the PR description"
fi

echo ""
echo "📖 Documentation:"
echo "   - Full changelog: CLAUDE-CHANGES.md"
echo "   - PR description: PR_DESCRIPTION.md"
echo ""
echo "✨ Done!"
