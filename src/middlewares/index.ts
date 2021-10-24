import { ErrorRequestHandler, RequestHandler } from 'express';

export const notFound: RequestHandler = (req, res, next) => {
  res.status(404);
  return next(new Error('Route not found'));
};

export const errorHandler: ErrorRequestHandler = (err: Error, req, res, next) => {
  if (res.statusCode === 200) res.status(500);

  return res.json({
    ok: false,
    error: {
      message: err.message,
      stack: process.env.NODE_ENV !== 'production' ? err.stack : {},
    },
  });
};
