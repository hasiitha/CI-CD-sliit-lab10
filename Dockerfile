FROM node:16-alpine
RUN npm install -g express cors axios
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 5000
CMD ["node","index.js"]

