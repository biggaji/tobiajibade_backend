FROM node:16.13.0-alpine
WORKDIR /api
ADD package*.json ./
RUN npm ci --only=production
EXPOSE 43001
ADD . .
CMD npm run start