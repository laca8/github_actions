FROM node:24-alpine

WORKDIR /app

COPY package*.json ./

RUN npm config set strict-ssl false

RUN npm ci --omit=dev

COPY . .

EXPOSE 3000

CMD ["npm", "start"]