import express, { Application } from "express";
import { Server } from "http";
import pino from "pino-http";
import routes from "./routes";
import { logger } from "./logger";
import AppDataSource from "./database";

export type AppServer = {
  start: () => Promise<Application>;
  stop: () => Promise<void>;
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
    start: async () => {
      logger.info("Starting server.");

      await AppDataSource.initialize();
      server = app.listen(port, () =>
        logger.info(`Server started on port: ${port}`)
      );
      return app;
    },
    stop: async () => {
      logger.info("Shutting down server.");
      if (!server) {
        logger.info("Server not started");
        return;
      }

      await AppDataSource.destroy();
      server.close(() => {
        logger.info("Server successfully shutdown");
        process.exit(0);
      });
    },
  };
}

export default server;
