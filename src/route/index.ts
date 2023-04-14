import express from 'express';
import  Routes  from './defaultRoute';
import  PostRoutes  from './post_route';

export const routes = express.Router();

routes.use(Routes.routes());
routes.use(PostRoutes.routes());