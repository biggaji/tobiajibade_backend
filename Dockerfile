FROM node:6.12.0-alpine
WORKDIR /api
ADD package*.json ./
RUN tsc -p .
RUN npm ci --only=production
EXPOSE 43001
ADD . .
CMD node index.js