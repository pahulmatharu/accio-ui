FROM nginx:latest
COPY nginx_conf/default.conf /etc/nginx/conf.d/default.conf 
COPY build /usr/share/nginx/html/