import { LoggerOptions } from "express-winston";
import { transports } from "winston";

const loggerConfig: LoggerOptions = {
  transports: [
    new transports.File({
      dirname: "logs",
      handleExceptions: true,
    }),
  ],
};

export default loggerConfig;
