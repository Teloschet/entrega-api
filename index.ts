import Server from './src/server';
import { Signale } from 'signale';

import * as dotenv from 'dotenv';
import swaggerAutogen from 'swagger-autogen';
dotenv.config();

if (process.env.NODE_ENV !== 'production') {
  swaggerAutogen('./src/docs/swagger_output.json', ['./src/routes.ts'], {
    info: { title: 'entrega-api' },
  });

  const log = new Signale();
  log.scope('Server').warn(`API started at ${process.env.NODE_ENV} mode`);
}

const server = new Server();
server.start();
