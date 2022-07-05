import { logger } from "./logger";
import server from "./server";

function main(): void {
  try {
    const s = server();
    s.start();

    process.once("SIGUSR2", () => s.stop());
    process.once("SIGTERM", () => s.stop());
  } catch (error) {
    logger.error("Failed to start server", error);
  }
}

main();
