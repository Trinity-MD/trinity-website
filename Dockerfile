# =========================
# Etapa 1: Build do Tailwind
# =========================
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY tailwind.config.js ./
COPY Main ./Main

RUN npm run build


# =========================
# Etapa 2: Servidor Nginx
# =========================
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/Main /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]