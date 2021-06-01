import express, { NextFunction, Request, Response } from 'express';

import routes from './routes';

import CustomError from '../src/errors/CustomError';

const baseUrl = '/api/v1/users';

const app = express();

app.use(express.json());
app.use(baseUrl, routes);

app.use(
  (error: Error, request: Request, response: Response, _: NextFunction) => {
    if (error instanceof CustomError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }

    console.error(error);

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);

app.listen(3000, () => {
  console.log('🚀 Server running at localhost:3000');
});
