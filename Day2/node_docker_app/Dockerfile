# HARDENED Dockerfile
# ---- build stage ----
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev         

# ---- runtime stage ----
FROM node:18-alpine
WORKDIR /app
COPY --from=build /app/node_modules ./node_modules

COPY app.js ./
ENV NODE_ENV=production
USER node                      
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=3s \
    CMD wget -qO- http://localhost:3000/ || exit 1
CMD ["node", "app.js"]