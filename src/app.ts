/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import express from 'express';
import 'express-async-errors';

import { ErrorMiddleware } from 'middlewares/ErrorMiddleware';
import { routes } from './routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.use(ErrorMiddleware);

export { app };
