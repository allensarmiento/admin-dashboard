FROM node:alpine

WORKDIR /usr/src/app/client
COPY package.json ./
RUN npm install --only=prod
COPY ./ ./
