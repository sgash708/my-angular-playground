FROM node:12-alpine

WORKDIR /frontend

COPY package*.json /frontend

RUN echo y | npm install

COPY . .
