FROM node:16-alpine as development

# directorio de trabajo donde quedara el contenedor
WORKDIR /usr/src/app

COPY package*.json .

RUN npm install 

COPY . .

RUN npm run build



FROM node:16-alpine as production

ENV DB_NAME=mysql_docker
ENV DB_PASSWORD=root
ENV DB_PORT=3306
ENV DB_HOST=mysql


WORKDIR /usr/src/app

COPY package*.json .

RUN npm ci --only=production


COPY --from=development /usr/src/app/dist ./dist

CMD [ "node", "dist/index.js" ]