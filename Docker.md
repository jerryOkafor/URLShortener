### Build Docker Image

### Login

```bash
docker login 
```

```bash
docker build --tag jerryokafor/url-shortener .
```

### Run Docker IMage

```bash
docker run --name url-shortener --env-file .env -p 8000:8000 jerryokafor/url-shortener
```

### Show all running containers

```bash
docker ps
```

### Push to Docker Hub

```bash
docker push jerryokafor/url-shortener:latest
```

### Remove container
```bash
docker rm -f mycontainer
```