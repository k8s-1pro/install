# docker buildx create --name multiarch-builder --use
docker buildx build --push --platform linux/arm64/v8,linux/amd64 --tag 1pro/exam:1.0 .