import { Router } from 'express';
import { AuthenticateClientController } from '@accounts/useCases/authenticateClient/AuthenticateClientController';
import { CreateClientController } from '@clients/useCases/createClient/CreateClientController';

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();

routes.post('/client/', createClientController.handle);
routes.post('/authenticate', authenticateClientController.handle);

export { routes };
