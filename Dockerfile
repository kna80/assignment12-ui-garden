FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:alpine
WORKDIR /Kaur_Khushdeep_ui_garden

COPY --from=build /app/build /usr/share/nginx/html
RUN sed -i 's/listen       80;/listen       8083;/' /etc/nginx/conf.d/default.conf
EXPOSE 8083

CMD ["nginx", "-g", "daemon off;"]