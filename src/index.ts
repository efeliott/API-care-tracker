import { Sequelize } from "sequelize";
import databaseConfig from "./config/database";

const sequelize = new Sequelize(
  databaseConfig.database,
  databaseConfig.username,
  databaseConfig.password || undefined,
  {
    host: databaseConfig.host,
    dialect: databaseConfig.dialect,
    define: { timestamps: true },
  }
);

export { sequelize };
export default sequelize;