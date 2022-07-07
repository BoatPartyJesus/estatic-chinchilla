import * as dotenv from 'dotenv'
dotenv.config()
import "reflect-metadata";
import { logger } from "./logger";
import server from "./server";

async function main(): Promise<void> {
  try {
    const s = server();
    await s.start();

    process.once("SIGUSR2", () => s.stop());
    process.once("SIGTERM", () => s.stop());
  } catch (error) {
    logger.error(error, "Failed to start server.");
  }
}

main();
