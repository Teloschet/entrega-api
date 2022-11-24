import Server from './src/server';
import { Signale } from 'signale';

import * as dotenv from 'dotenv';
dotenv.config();

if (process.env.NODE_ENV !== 'production') {
  const log = new Signale();
  log.scope('Server').warn(`API started at ${process.env.NODE_ENV} mode`);
}

const server = new Server();
server.start();
