/* eslint-disable no-console */
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import { IPayload } from 'interfaces/IPayload';

export async function ensureAuthenticateClient(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      message: 'Token missing',
    });
  }

  // Token
  const [, token] = authHeader.split(' ');
  const jwtSecret = process.env.JWT_SECRET;

  try {
    const { sub } = verify(token, `${jwtSecret}`) as IPayload;

    req.id_client = sub;

    return next();
  } catch (error) {
    return res.status(401).json({
      message: 'Invalid token!',
    });
  }
}
