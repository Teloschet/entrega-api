import 'express-async-errors';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { errors } from 'celebrate';
import swaggerUi from 'swagger-ui-express';

import { ErrorMiddleware } from '@middlewares/ErrorMiddleware';
import { routes } from './routes';

import swaggerOutput from './docs/swagger_output.json';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev', { skip: () => process.env.NODE_ENV === 'test' }));
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerOutput));

app.use('/api/v1', routes);
app.use(errors());
app.use(ErrorMiddleware);

export { app };
