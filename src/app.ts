import Express from 'express';
import cors from 'cors';
import { logger } from 'express-winston';
import loggerConfig from './configs/loggerConfig';
import { errorHandler, notFound } from './middlewares';
import router from './routes';

const app = Express();

// add logger
app.use(logger(loggerConfig));

app.use(cors());

// Middlewares to accept request body
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

// API Routes
app.use('/api/v1', router);

app.use('*', notFound);

app.use(errorHandler);

export default app;
