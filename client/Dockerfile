FROM node:18.4.0-alpine as build 

WORKDIR /app 

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run build 

FROM nginx:1.23.0-alpine as production 

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/build /usr/share/nginx/html