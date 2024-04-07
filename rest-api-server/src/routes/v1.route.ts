import { Router } from 'express';
import { health, helloWorld } from '../controllers/health.controller';
import { asyncHandler } from '../utils/asynchandler';
import studentRouter from './student.route';

const v1Router = Router();

v1Router.get('/', asyncHandler(helloWorld));
v1Router.get('/healthcheck', asyncHandler(health));
v1Router.use('/students', studentRouter);
export default v1Router;