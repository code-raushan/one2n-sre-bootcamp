FROM node:18 AS base 
WORKDIR /app
COPY package*.json ./

FROM base AS dependencies
RUN npm install

FROM dependencies AS build
COPY . .
RUN npm run build

FROM node:18 AS RELEASE
WORKDIR /app
COPY --from=dependencies /app/package*.json ./
RUN npm install --only=production
COPY --from=build /app/dist ./dist
EXPOSE 8000
CMD ["npm", "start"]