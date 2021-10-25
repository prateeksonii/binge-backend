import { ErrorRequestHandler, RequestHandler } from 'express';

export const notFound: RequestHandler = (req, res, next) => {
  res.status(404);
  return next(new Error('Route not found'));
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorHandler: ErrorRequestHandler = (err: Error, req, res, _next) => {
  if (res.statusCode === 200) res.status(500);
  console.log(err);
  return res.json({
    ok: false,
    error: {
      message: err.message,
      stack: process.env.NODE_ENV !== 'production' ? err.stack : {},
    },
  });
};
