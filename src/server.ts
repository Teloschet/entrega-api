/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';

import { routes } from './routes';

import * as dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT! || 5000;

app.use(express.json());
app.use(routes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({
      message: err.message,
    });
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`API server is running at port ${PORT}`));
