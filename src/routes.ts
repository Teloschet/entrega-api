import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import { AuthenticateClientController } from '@accounts/useCases/authenticateClient/AuthenticateClientController';
import { CreateClientController } from '@clients/useCases/createClient/CreateClientController';
import { CreateDeliveryManController } from '@deliveryman/useCases/createDeliveryman/CreateDeliveryManController';
import { AuthenticateDeliveryManController } from '@accounts/useCases/authenticateDeliveryman/AuthenticateDeliveryManController';
import { CreateDeliveryController } from '@deliveries/useCases/createDelivery/CreateDeliveryController';
import { ensureAuthenticateClient } from '@middlewares/ensureAuthenticateClient';
import { FindAllWithoutEndDateController } from '@deliveries/useCases/findAllWithoutEndDate/FindAllWithoutEndDateController';
import { ensureAuthenticateDeliveryman } from '@middlewares/ensureAuthenticateDeliveryman';
import { UpdateDeliverymanController } from '@deliveries/useCases/updateDeliveryman/UpdateDeliverymanController';
import { FindAllDeliveriesController } from '@clients/useCases/deliveries/FindAllDeliveriesController';
import { FindAllDeliveriesDeliverymanController } from '@deliveryman/useCases/findAllDeliveries/FindAllDeliveriesDeliverymanController';
import { UpdateEndDateController } from '@deliveries/useCases/updateEndDate/UpdateEndDateController';

const routes = Router();

const authenticateClientController = new AuthenticateClientController();
const authenticateDeliveryManController = new AuthenticateDeliveryManController();
const createClientController = new CreateClientController();
const createDeliveryManController = new CreateDeliveryManController();
const deliveryController = new CreateDeliveryController();
const findAllDeliveriesWithoutEndDateController = new FindAllWithoutEndDateController();
const updateDeliverymanController = new UpdateDeliverymanController();
const findAllDeliveriesClient = new FindAllDeliveriesController();
const findAllDeliveriesDeliveryman = new FindAllDeliveriesDeliverymanController();
const updateEndDateController = new UpdateEndDateController();

routes.post(
  '/client/authenticate',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().required().messages({
        'string.base': `"email" deve ser uma string`,
        'string.empty': `"email" não pode ser um campo vazio`,
        'any.required': `"email" é um campo requerido`,
      }),
      password: Joi.string().required().messages({
        'string.base': `"password" deve ser uma string`,
        'string.empty': `"password" não pode ser um campo vazio`,
        'string.min': `"password" deve ter no mínimo 8 caracteres`,
        'any.required': `"password" é um campo requerido`,
      }),
    },
  }),
  authenticateClientController.handle,
);
routes.post(
  '/deliveryman/authenticate',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().required().messages({
        'string.base': `"email" deve ser uma string`,
        'string.empty': `"email" não pode ser um campo vazio`,
        'any.required': `"email" é um campo requerido`,
      }),
      password: Joi.string().required().messages({
        'string.base': `"password" deve ser uma string`,
        'string.empty': `"password" não pode ser um campo vazio`,
        'string.min': `"password" deve ter no mínimo 8 caracteres`,
        'any.required': `"password" é um campo requerido`,
      }),
    },
  }),
  authenticateDeliveryManController.handle,
);

routes.post('/client/', createClientController.handle);
routes.post('/deliveryman', createDeliveryManController.handle);

routes.post('/delivery', ensureAuthenticateClient, deliveryController.handle);
routes.get('/delivery/available', ensureAuthenticateDeliveryman, findAllDeliveriesWithoutEndDateController.handle);
routes.put('/delivery/updateDeliveryman/:id', ensureAuthenticateDeliveryman, updateDeliverymanController.handle);

routes.get('/client/deliveries', ensureAuthenticateClient, findAllDeliveriesClient.handle);
routes.get('/deliveryman/deliveries', ensureAuthenticateDeliveryman, findAllDeliveriesDeliveryman.handle);

routes.put('/delivery/updateEndDate/:id', ensureAuthenticateDeliveryman, updateEndDateController.handle);

export { routes };
