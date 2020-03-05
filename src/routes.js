import { Router } from 'express';

import UserController from './controllers/UserController';

const routes = new Router();

routes.get('/user', UserController.getAll);
routes.get('/user/:id', UserController.getById);
routes.post('/user', UserController.create);
routes.put('/user/:id',UserController.update);
routes.delete('/user/:id',UserController.delete);
export default routes;