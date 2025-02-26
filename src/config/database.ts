import { Sequelize } from "sequelize";
import { config } from "dotenv";

config();

const sequelize = new Sequelize(
  process.env.DB_NAME || "u103016661_aidora",
  process.env.DB_USER || "u103016661_admin",
  process.env.DB_PASSWORD || "?UfEXd]vG0",
  {
    host: process.env.DB_HOST || "193.203.168.207",
    dialect: "mysql",
    define: { timestamps: true },
  }
);

export { sequelize }; // 👈 Assurez-vous d'exporter sequelize ici
export default sequelize; // 👈 Optionnel, mais utile si vous préférez l'import par défaut