import express, { NextFunction, Request, Response } from 'express';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

import { notFound } from './controllers/health.controller';
import { globalHandler } from './middlewares/error-handler.middleware';
import rootRouter from './routes/index.route';
import { asyncHandler } from './utils/asynchandler';
import logger from './utils/logger';
import { getLocalIP } from './utils/system.util';

const app = express();


app.use(express.json());

app.use("/api", rootRouter);

app.get('/favicon.ico', (req, res) => res.status(204).end());

app.use('*', asyncHandler(notFound));

app.use((
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  data: any, req: Request, res: Response, next: NextFunction
) => {
  globalHandler(data, req, res, next);
});

logger.info(`Local IP - ${getLocalIP()}`);

export default app;
