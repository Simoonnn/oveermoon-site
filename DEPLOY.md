# Deploy — OVEERMOON landing

Next.js 14 (standalone) in Docker. Same pattern as `tender-landing-2`.
The container listens on `3000` inside; published on the host at `127.0.0.1:8030`.
Point nginx (OVEERMOON domain) → `http://127.0.0.1:8030`.

## Secrets (required for the lead form)
The form `/api/lead` reads Telegram credentials from the environment at runtime.
They are **not** in git. Create `.env.local` next to `docker-compose.prod.yml`:

```
TELEGRAM_BOT_TOKEN=...
TELEGRAM_CHAT_ID=...
```

`docker-compose.prod.yml` injects them via `env_file: .env.local`. Without this
file the site runs, but the form returns an error instead of sending to Telegram.

## Local
```bash
docker compose -f docker-compose.prod.yml up -d --build   # http://127.0.0.1:8030
docker compose -f docker-compose.prod.yml logs -f web
docker compose -f docker-compose.prod.yml down
```

## Manual server deploy
```bash
ssh root@SERVER
cd /root/prod-oveermoon/oveermoon
git pull            # or push-to-deploy (below)
./deploy.sh
```

## Push-to-deploy (git hook)
One-time setup on the server is documented at the top of `post-receive`. After that:
```bash
git remote add prod ssh://root@SERVER/root/prod-oveermoon/oveermoon.git
git push prod main      # → checks out + runs deploy.sh automatically
```

## nginx (example)
```nginx
server {
    server_name oveermoon.ru www.oveermoon.ru;
    location / {
        proxy_pass http://127.0.0.1:8030;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```
