import { Request, Response, Router } from 'express';
import { AuthenticateClientController } from '@accounts/useCases/authenticateClient/AuthenticateClientController';
import { CreateClientController } from '@clients/useCases/createClient/CreateClientController';
import { CreateDeliveryManController } from '@deliveryman/useCases/createDeliveryman/CreateDeliveryManController';
import { AuthenticateDeliveryManController } from '@accounts/useCases/authenticateDeliveryman/AuthenticateDeliveryManController';

const routes = Router();

const authenticateClientController = new AuthenticateClientController();
const authenticateDeliveryManController = new AuthenticateDeliveryManController();
const createClientController = new CreateClientController();
const createDeliveryManController = new CreateDeliveryManController();

routes.get('/', (req: Request, res: Response) => res.send('OK'));

routes.post('/client/authenticate', authenticateClientController.handle);
routes.post('/deliveryman/authenticate', authenticateDeliveryManController.handle);

routes.post('/client/', createClientController.handle);
routes.post('/deliveryman', createDeliveryManController.handle);

export { routes };
