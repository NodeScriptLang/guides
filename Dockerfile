FROM node:16-alpine as builder
COPY . /
WORKDIR /
RUN yarn install && yarn build

FROM nginx:1.19-alpine
COPY --from=builder /src/.vuepress/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8900
