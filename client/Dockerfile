FROM node:14.16.1-alpine as Builder

WORKDIR /tmp

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "build"]

FROM nginx

WORKDIR /usr/share/nginx/html
COPY --from=builder /tmp/build .
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

