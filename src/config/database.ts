import { Sequelize } from "sequelize";
import { config } from "dotenv";

config();

const sequelize = new Sequelize(
  process.env.DB_NAME || "care_tracker",
  process.env.DB_USER || "root",
  process.env.DB_PASSWORD || "",
  {
    host: process.env.DB_HOST || "localhost",
    dialect: "mysql",
    define: { timestamps: true },
  }
);

export { sequelize }; // 👈 Assurez-vous d'exporter sequelize ici
export default sequelize; // 👈 Optionnel, mais utile si vous préférez l'import par défaut