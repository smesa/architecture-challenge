# Utiliza una imagen base de Node.js
FROM node:16

# Establece el directorio de trabajo
WORKDIR /app

# Copia package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm ci

# Copia el resto del código fuente al directorio de trabajo
COPY . .

# Compila la aplicación
RUN npm run build

# Instala un servidor HTTP básico para servir la aplicación
RUN npm install -g serve

# Expone el puerto 5173 para acceder a la aplicación
EXPOSE 5173

# Ejecuta el servidor HTTP para servir la aplicación
CMD ["serve", "dist", "-l", "5173"]