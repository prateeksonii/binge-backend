import Express from "express";
import { logger } from "express-winston";
import { transports } from "winston";
import loggerConfig from "./configs/loggerConfig";

const app = Express();

// add logger
app.use(logger(loggerConfig));

// Middlewares to accept request body
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

export default app;
