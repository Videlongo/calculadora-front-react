FROM node:latest AS miapp
WORKDIR /app
# COPY package.json ./
# RUN npm install
COPY . .
RUN npm run build 

FROM nginx
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=miapp /app/build .
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]