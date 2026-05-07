# =========================
# Stage 1 - Build React App
# =========================
FROM node:18-alpine AS build

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos solo package files primero
COPY package*.json ./

# Instalación reproducible y más rápida para CI/CD
RUN npm ci

# Copiamos el resto del proyecto
COPY . .

# Build optimizado producción
RUN npm run build

# =========================
# Stage 2 - NGINX Runtime
# =========================
FROM nginx:alpine

# Copiamos build generado
COPY --from=build /app/build /usr/share/nginx/html

# Puerto nginx
EXPOSE 80

# Mantener nginx foreground
CMD ["nginx", "-g", "daemon off;"]