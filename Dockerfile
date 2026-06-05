# Multi-stage Dockerfile for OVEERMOON landing (Next.js 14 App Router)
# Output: minimal self-contained image based on Next.js standalone build.

# =============================================================================
# Stage 1: deps — install dependencies (cached layer)
# =============================================================================
FROM node:22-alpine AS deps

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci --no-audit --no-fund

# =============================================================================
# Stage 2: builder — build Next.js app (produces .next/standalone)
# =============================================================================
FROM node:22-alpine AS builder

WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# =============================================================================
# Stage 3: runner — minimal runtime image
# =============================================================================
FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Non-root user for security
RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nextjs

# Public assets (logo, product photos)
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# Standalone output bundles only what's needed at runtime (incl. /api/lead)
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:3000/ || exit 1

# Telegram secrets (TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID) are injected at
# runtime via docker-compose env_file — never baked into the image.
CMD ["node", "server.js"]
