import {Router} from 'express';
import SessionController from './controllers/SessionController';
import FaveController from './controllers/FaveController';

const routes = new Router();

routes.post('/sessions', SessionController.store);
routes.put('/client_edit/:user', SessionController.edit);
routes.delete('/delete', SessionController.destoy);

routes.put('/fave/:id', FaveController.edit);
routes.get('/fave_list', FaveController.show);



export default routes;