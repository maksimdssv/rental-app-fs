FROM node:16
WORKDIR /app
COPY package*.json ./

RUN npm ci

RUN npm install pg

COPY . .

RUN npm run build

EXPOSE ${BACKEND_PORT}
CMD npm run start:dev
