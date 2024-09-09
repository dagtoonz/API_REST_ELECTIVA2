# Usa una imagen base de Node.js
FROM node:20.12.0

# Establece el directorio de trabajo
WORKDIR /usr/src/app

# Copia package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código
COPY . .

# Expone el puerto en el que la app estará corriendo
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "run","dev"]