import { Request, Response } from 'express';

export interface IExpress {
  req: Request;
  res: Response;
}
