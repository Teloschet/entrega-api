import { Router } from 'express';

import { AuthenticateClientController } from '@accounts/useCases/authenticateClient/AuthenticateClientController';
import { CreateClientController } from '@clients/useCases/createClient/CreateClientController';
import { CreateDeliveryManController } from '@deliveryman/useCases/createDeliveryman/CreateDeliveryManController';
import { AuthenticateDeliveryManController } from '@accounts/useCases/authenticateDeliveryman/AuthenticateDeliveryManController';
import { CreateDeliveryController } from 'modules/deliveries/useCases/createDelivery/CreateDeliveryController';
import { ensureAuthenticateClient } from '@middlewares/ensureAuthenticateClient';
import { FindAllWithoutEndDateController } from '@deliveries/useCases/findAllWithoutEndDate/FindAllWithoutEndDateController';
import { ensureAuthenticateDeliveryman } from '@middlewares/ensureAuthenticateDeliveryman';

const routes = Router();

const authenticateClientController = new AuthenticateClientController();
const authenticateDeliveryManController = new AuthenticateDeliveryManController();
const createClientController = new CreateClientController();
const createDeliveryManController = new CreateDeliveryManController();
const deliveryController = new CreateDeliveryController();
const findAllDeliveriesWithoutEndDateController = new FindAllWithoutEndDateController();

routes.post('/client/authenticate', authenticateClientController.handle);
routes.post('/deliveryman/authenticate', authenticateDeliveryManController.handle);

routes.post('/client/', createClientController.handle);
routes.post('/deliveryman', createDeliveryManController.handle);

routes.post('/delivery', ensureAuthenticateClient, deliveryController.handle);
routes.get('/delivery/available', ensureAuthenticateDeliveryman, findAllDeliveriesWithoutEndDateController.handle);

export { routes };
