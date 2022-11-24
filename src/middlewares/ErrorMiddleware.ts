/* eslint-disable @typescript-eslint/no-unused-vars */
import { IError } from 'interfaces/IError';

export const ErrorMiddleware = ({ err, req, res, next }: IError) => {
  if (err instanceof Error) {
    return res.status(400).json({
      message: err.message,
    });
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
};
