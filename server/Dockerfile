# Utiliza la imagen oficial de Node.js 14
FROM node:14

# Establece el directorio de trabajo en la imagen
WORKDIR /usr/src/app

# Copia el archivo package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el código fuente al directorio de trabajo
COPY . .

# Expone el puerto en el que se ejecutará la aplicación
EXPOSE 3000

# Ejecuta la aplicación
CMD [ "npm", "start" ]