import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../errors/custom-error';

// Create a consistent error response for all services.
export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): Response => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  // Unexpected errors get logged
  console.error(err);
  return res.status(400).send({
    errors: [{ message: 'Something went wrong. Error not recognized.' }],
  });
};
