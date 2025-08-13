# Stage 1: Build the Angular application
FROM node:20 AS build
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install
COPY . .
RUN pnpm build --prod

# Stage 2: Serve the application with NGINX
FROM nginx:1.21-alpine
COPY --from=build /app/dist/electrical-monitoring-dashboard/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
