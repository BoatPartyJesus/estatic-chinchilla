import express, { Application } from "express";
import { Server } from "http";
import pino from "pino-http";
import routes from "./routes";
import { logger } from "./logger";

export type AppServer = {
  start: () => void;
  stop: () => void;
};

function server(): AppServer {
  let server: Server;
  const httpLogger = pino({
    logger,
    autoLogging: false,
  });

  const app: Application = express();
  const port = 3000;

  app.use(httpLogger);
  app.use(routes);

  return {
    start: () => {
      logger.info("Starting server.");
      server = app.listen(port, () =>
        logger.info(`Server started on port: ${port}`)
      );
      return app;
    },
    stop: () => {
      logger.info("Shutting down server.");
      if (!server) {
        logger.info("Server not started");
        return;
      }

      server.close(() => {
        logger.info("Server successfully shutdown");
        process.exit(0);
      });
    },
  };
}

export default server;
