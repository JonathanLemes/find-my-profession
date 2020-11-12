import { Router } from 'express';

import ServicesController from './src/controllers/ServicesController';
import TiersController from './src/controllers/TiersController';

const routes = Router();

routes.post('/service', ServicesController.create);
routes.post('/tier', TiersController.create);
routes.post('/tier/service', TiersController.createByServiceName); // Not recommended. Name is not a primary key

routes.get('/service/:url', ServicesController.showByUrl);
routes.get('/tier/:id', TiersController.show);
routes.get('/tier/service/:url', TiersController.showByServiceUrl);

routes.get('/services', ServicesController.showAll);
routes.get('/tiers', TiersController.showAll);

export default routes;