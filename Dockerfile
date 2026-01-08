# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Install build dependencies
COPY package*.json ./
RUN npm ci

# Copy source code
COPY . .

# Build the application (Vite frontend + Esbuild backend)
RUN npm run build

# Stage 2: Production
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
# Set default port to 80 as requested
ENV PORT=80

# Install production dependencies
# esbuild excludes some dependencies from the bundle, so we need them at runtime
COPY package*.json ./
RUN npm ci --omit=dev

# Copy build artifacts from builder stage
COPY --from=builder /app/dist ./dist

# Expose the application port
EXPOSE 80

# Run the application
CMD ["node", "dist/index.cjs"]
