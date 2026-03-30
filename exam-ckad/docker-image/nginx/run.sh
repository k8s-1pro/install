# docker buildx create --name multiarch-builder --use
# docker login -u 1pro
docker buildx build --push --platform linux/arm64/v8,linux/amd64 --tag 1pro/nginx:1.42.1 .