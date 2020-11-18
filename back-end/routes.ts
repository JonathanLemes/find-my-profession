import { Router } from 'express';

import ServicesController from './src/controllers/ServicesController';
import TierDescriptionController from './src/controllers/TierDescriptionController';
import TiersController from './src/controllers/TiersController';
import UserController from './src/controllers/UserController';

const routes = Router();

routes.post('/service', ServicesController.create);
routes.post('/tier', TiersController.create);
routes.post('/tier/service', TiersController.createByServiceName); // Not recommended. Name is not a primary key
routes.post('/tier-description', TierDescriptionController.create);
routes.post('/user', UserController.create);

routes.get('/service/:url', ServicesController.showByUrl);
routes.get('/tier/:id', TiersController.show);
routes.get('/tier/service/:url', TiersController.showByServiceUrl);
routes.get('/tier-description/:id', TierDescriptionController.show);

routes.get('/services', ServicesController.showAll);
routes.get('/tiers', TiersController.showAll);
routes.get('/tier-descriptions', TierDescriptionController.showAll);
routes.get('/users', UserController.showAll);

routes.delete('/services', ServicesController.deleteAll);
routes.delete('/tiers', TiersController.deleteAll);
routes.delete('/users', UserController.deleteAll);

export default routes;