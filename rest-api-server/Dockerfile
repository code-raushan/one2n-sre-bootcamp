FROM node:18-alpine AS base 
WORKDIR /app
COPY package*.json ./

FROM base AS dependencies
RUN npm ci

FROM dependencies AS build
COPY . .
RUN npm run build

FROM node:18-alpine AS RELEASE
WORKDIR /app
COPY --from=dependencies /app/package*.json ./
RUN npm ci --only=production
COPY --from=build /app/dist ./dist
EXPOSE 8000
CMD ["npm", "start"]