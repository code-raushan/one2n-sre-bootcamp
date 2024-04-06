/* eslint-disable @typescript-eslint/no-non-null-assertion */
import dotenv from 'dotenv';
dotenv.config();

const config = {
  MONGO_URI: process.env.MONGO_URI! as string,
  NODE_ENV: process.env.NODE_ENV! as string,
  REDIS_HOST: process.env.REDIS_HOST! as string,
  REDIS_PORT: process.env.REDIS_PORT! as string,
  PORT: process.env.PORT! as string,
  JWT_SECRET: process.env.JWT_SECRET! as string,
  ACCESS_TOKEN_EXPIRY: process.env.ACCESS_TOKEN_EXPIRY! as string,
  CLOUDWATCH_LOG_GROUP_NAME: process.env.CLOUDWATCH_LOG_GROUP_NAME! as string,
  CLOUDWATCH_LOGS_ID: process.env.CLOUDWATCH_LOGS_ID! as string,
  CLOUDWATCH_LOGS_SECRET: process.env.CLOUDWATCH_LOGS_SECRET! as string,
  CLOUDWATCH_LOGS_REGION: process.env.CLOUDWATCH_LOGS_REGION! as string,

  SERVER_NAME: `${process.env.SERVER_NAME}-${process.env.NODE_ENV}`! as string,


  PG_DATABASE_HOST: process.env.PG_DATABASE_HOST! as string,
  PG_DATABASE: process.env.PG_DATABASE! as string,
  PG_DATABASE_PORT: process.env.PG_DATABASE_PORT! as string,
  PG_DATABASE_USER: process.env.PG_DATABASE_USER! as string,
  PG_DATABASE_PASSWORD: process.env.PG_DATABASE_PASSWORD! as string,
};

export default config;