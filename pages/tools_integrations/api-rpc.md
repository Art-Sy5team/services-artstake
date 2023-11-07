# Panduan Membuat RPC API dan GRPC WEB Node Cosmos

## Persiapkan:
- Domain dan Subdomain

## Pengaturan API dalam app.toml

![img](https://user-images.githubusercontent.com/65535542/215301089-2477d432-005b-4505-a3d2-28976ddd1d6c.png)


```js copy
nano $HOME/.planqd/config/app.toml
```

## Instalasi Paket

```js copy
sudo apt autoremove nodejs -y
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | gpg --dearmor | sudo tee /usr/share/keyrings/yarnkey.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/yarnkey.gpg] https://dl.yarnpkg.com/debian stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update
sudo apt install nginx certbot python3-certbot-nginx nodejs git yarn -y 
```

## Pengaturan Proxy nginx dan Instalasi SSL

### Periksa API dan RPC IP:PORT

```js copy
nano $HOME/.planqd/config/app.toml
```

![img](https://user-images.githubusercontent.com/65535542/215300888-5fe0d7da-ef16-4f86-b9be-81af01f26058.png)

```js copy
nano $HOME/.planqd/config/config.toml
```

![img](https://user-images.githubusercontent.com/65535542/215300949-42bb29cc-116d-483d-a512-a4c29fb325d1.png)

### Periksa GRPC dan GRPC IP:PORT

```js copy
nano $HOME/.planqd/config/app.toml
```

![img](https://user-images.githubusercontent.com/85473027/221359346-5f0090b8-faf9-4836-b15b-bd58fb7f8d99.png)

- Atur Domain API
```js copy
API_DOMAIN="YOUR_API_DOMAIN"
```

- Atur Port API
```js copy
API_IP_PORT="IP:PORT"
```

- Atur Domain RPC
```js copy
RPC_DOMAIN="YOUR_API_DOMAIN"
```

- Atur Port RPC
```js copy
RPC_IP_PORT="IP:PORT"
```

- Atur Domain GRPC
```js copy
GRPC_DOMAIN="YOUR_GRPC_DOMAIN"
```

- Atur Port GRPC
```js copy
GRPC_IP_PORT="IP:PORT"
```

- Atur Domain GRPC_WEB
```js copy
GRPC_WEB_DOMAIN="YOUR_GRPC_WEB_DOMAIN"
```

- Atur Port GRPC_WEB
```js copy
GRPC_WEB_IP_PORT="IP:PORT"
```

### Buat Konfigurasi

### Buat Konfigurasi API
```js copy
sudo cat <<EOF > /etc/nginx/sites-enabled/${API_DOMAIN}.conf
server {
    server_name $API_DOMAIN;
    listen 80;
    location / {
        add_header Access-Control-Allow-Origin *;
        add_header Access-Control-Max-Age 3600;
        add_header Access-Control-Expose-Headers Content-Length;

	proxy_set_header   X-Real-IP        \$remote_addr;
        proxy_set_header   X-Forwarded-For  \$proxy_add_x_forwarded_for;
        proxy_set_header   Host             \$host;

        proxy_pass http://$API_IP_PORT;

    }
}
EOF
```

### Buat Konfigurasi RPC

```js copy
sudo cat <<EOF > /etc/nginx/sites-enabled/${RPC_DOMAIN}.conf
server {
    server_name $RPC_DOMAIN;
    listen 80;
    location / {
        add_header Access-Control-Allow-Origin *;
        add_header Access-Control-Max-Age 3600;
        add_header Access-Control-Expose-Headers Content-Length;

	proxy_set_header   X-Real-IP        \$remote_addr;
        proxy_set_header   X-Forwarded-For  \$proxy_add_x_forwarded_for;
        proxy_set_header   Host             \$host;
	
	proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection "upgrade";

        proxy_pass http://$RPC_IP_PORT;

    }
}
EOF
```

### Buat Konfigurasi GRPC

```js copy
sudo cat <<EOF > /etc/nginx/sites-enabled/${GRPC_DOMAIN}.conf
server {
    server_name $GRPC_DOMAIN;
    listen 80;
    location / {
        add_header Access-Control-Allow-Origin *;
        add_header Access-Control-Max-Age 3600;
        add_header Access-Control-Expose-Headers Content-Length;

	proxy_set_header   X-Real-IP        \$remote_addr;
        proxy_set_header   X-Forwarded-For  \$proxy_add_x_forwarded_for;
        proxy_set_header   Host             \$host;

        proxy_pass http://$GRPC_IP_PORT;

    }
}
EOF
```

### Buat Konfigurasi GRPC WEB

```js copy
sudo cat <<EOF > /etc/nginx/sites-enabled/${GRPC_WEB_DOMAIN}.conf
server {
    server_name $GRPC_WEB_DOMAIN;
    listen 80;
    location / {
        add_header Access-Control-Allow-Origin *;
        add_header Access-Control-Max-Age 3600;
        add_header Access-Control-Expose-Headers Content-Length;

	proxy_set_header   X-Real-IP        \$remote_addr;
        proxy_set_header   X-Forwarded-For  \$proxy_add_x_forwarded_for;
        proxy_set_header   Host             \$host;

        proxy_pass http://$GRPC_WEB_IP_PORT;

    }
}
EOF
```

### Uji Konfigurasi

```js copy
sudo pkill nginx
nginx -t 
```

Output jika berhasil

`nginx: the configuration file /etc/nginx/nginx.conf syntax is ok`

`nginx: configuration file /etc/nginx/nginx.conf test is successful`

### Pasang Sertifikat SSL

```js copy
sudo certbot --nginx --register-unsafely-without-email
sudo certbot --nginx --redirect -d ${API_DOMAIN},${RPC_DOMAIN},${GRPC_DOMAIN},${GRPC_WEB_DOMAIN}
```