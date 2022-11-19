import { Router } from 'express';
import { AuthenticateClientController } from '@accounts/useCases/authenticateClient/AuthenticateClientController';
import { CreateClientController } from '@clients/useCases/createClient/CreateClientController';
import { CreateDeliveryManController } from '@deliveryman/useCases/createDeliveryman/CreateDeliveryManController';

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const createDeliveryManController = new CreateDeliveryManController();

routes.post('/authenticate', authenticateClientController.handle);

routes.post('/client/', createClientController.handle);
routes.post('/deliveryman', createDeliveryManController.handle);

export { routes };
