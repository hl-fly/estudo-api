import {Router} from 'express';
import SessionController from './controllers/SessionController';

const routes = new Router();

routes.post('/sessions', SessionController.store);
routes.put('/client_edit/:user/:password/:new_value', SessionController.editEmail);


export default routes;