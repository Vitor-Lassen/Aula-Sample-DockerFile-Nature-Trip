FROM node:22-alpine AS Construir

WORKDIR /app

COPY . .

RUN npm i

RUN npm run build

FROM nginx:alpine AS PROD

COPY --from=Construir /app/dist /usr/share/nginx/html

EXPOSE 80
EXPOSE 443