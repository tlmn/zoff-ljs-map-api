# Use the official Node.js 14 image as the base image
FROM node:14

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 4000

CMD ["node", "index.js"]
