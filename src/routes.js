import {Router} from 'express';
import SessionController from './controllers/SessionController';
import FaveController from './controllers/FaveController';

const routes = new Router();

routes.post('/sessions', SessionController.store);
routes.put('/client_edit/:new_value', SessionController.edit);
routes.delete('/delete', SessionController.destoy);

routes.put('/fave/:id', FaveController.edit);



export default routes;