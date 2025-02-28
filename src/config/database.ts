import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

// Création de l'instance Sequelize avec les variables d'environnement
const sequelize = new Sequelize(
  process.env.DB_NAME || "care_tracker",
  process.env.DB_USER || "root",
  process.env.DB_PASSWORD || "",
  {
    host: process.env.DB_HOST || "localhost",
    dialect: "mysql",
    define: { timestamps: true },
    logging: false, // Désactive les logs SQL pour éviter le spam
  }
);

export default sequelize; // ✅ On exporte l'instance Sequelize