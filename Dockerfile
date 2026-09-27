# Usa a imagem levíssima do Nginx
FROM nginx:alpine

# Limpa a pasta padrão
RUN rm -rf /usr/share/nginx/html/*

# Copia a nossa configuração customizada de rotas e rewrites
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia o site inteiro da sua pasta Main para o servidor
COPY ./Main /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]