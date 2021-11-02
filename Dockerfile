FROM node:6.12.0-alpine
WORKDIR /api
ADD package*.json ./
RUN npm run build
RUN npm ci --only=production
EXPOSE 43001
ADD . .
CMD npm run start