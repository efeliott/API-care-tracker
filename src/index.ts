import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes";
import { sequelize } from "./config/database";

dotenv.config();

const app = express();
app.use(express.json());

// Connexion à la base de données
sequelize.authenticate()
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Database connection failed:", err));

// Routes
app.use("/api/auth", authRoutes);

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));