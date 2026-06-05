#!/bin/bash
# Production deploy for OVEERMOON landing (Next.js, Docker-based).
# Run on the server after `git pull` (or invoked from the post-receive hook).

set -e

cd "$(dirname "$0")"

echo "🚀 Deploying OVEERMOON to production..."
echo ""

if [ ! -f .env.local ]; then
  echo "⚠️  .env.local not found — the lead form won't deliver to Telegram."
  echo "    Create it with TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID (see .env.example)."
  echo ""
fi

echo "📦 Building & restarting container..."
docker compose -f docker-compose.prod.yml up -d --build

echo "⏳ Waiting for healthcheck..."
sleep 6

echo ""
echo "📊 Status:"
docker compose -f docker-compose.prod.yml ps

echo ""
echo "🪵 Recent logs:"
docker compose -f docker-compose.prod.yml logs --tail=30 web

echo ""
echo "✅ Deploy complete. Container listening on 127.0.0.1:8030."
