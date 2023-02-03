FROM node:16
WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

ENV CHOKIDAR_USEPOLLING=true

EXPOSE ${FRONTEND_PORT}
CMD npm run dev
