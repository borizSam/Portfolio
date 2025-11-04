# Etapa 1: build del frontend
FROM node:18-alpine AS build
WORKDIR /app

# Copiamos dependencias
COPY package*.json ./

# Instalamos dependencias de forma flexible
RUN npm install --legacy-peer-deps

# Copiamos el resto del proyecto
COPY . .

# Construimos la app optimizada para producción
RUN npm run build

# Etapa 2: servir con NGINX
FROM nginx:alpine

# Copiamos el build al contenedor final
COPY --from=build /app/build /usr/share/nginx/html

# Exponemos el puerto 80 (Render lo usará automáticamente)
EXPOSE 80

# Comando de arranque
CMD ["nginx", "-g", "daemon off;"]
