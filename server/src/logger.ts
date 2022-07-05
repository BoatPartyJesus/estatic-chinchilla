import pino from "pino";

export const logger = pino({
  name: "clinchd",
  enabled: process.env["NODE_ENV"] !== "test"
});
