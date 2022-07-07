import { DataSource } from "typeorm";
import config from "../config";

const AppDataSource = new DataSource({
  type: "postgres",
  host: config.database.host,
  port: config.database.port,
  username: config.database.username,
  password: config.database.password,
  synchronize: true, // On a production application this wouldn't be enabled
  entities: [
    "src/entities/**/*.ts"
  ]
});

export default AppDataSource;
