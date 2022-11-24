import { NextFunction, Request, Response } from 'express';

export interface IError {
  req: Request;
  res: Response;
  next: NextFunction;
  err: Error;
}
