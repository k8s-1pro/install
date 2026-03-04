FROM node:slim
RUN apt-get update && \
    apt-get install -y curl && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*
EXPOSE 8080
COPY exam.js .
CMD ["node", "exam.js"]