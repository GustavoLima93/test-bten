import { Response, Request, NextFunction } from 'express';

import AppError from './AppError';

export default async (
  err: Error,
  request: Request,
  response: Response,
  _: NextFunction,
) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: 'ocorreu um erro',
  });
};