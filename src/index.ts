import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes";
import sequelize from "./config/database"; // ✅ Import correct de Sequelize

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", authRoutes);

// Vérification de la connexion à la BDD
sequelize.authenticate()
  .then(() => console.log("✅ Connexion à la base de données réussie."))
  .catch((err) => console.error("❌ Erreur de connexion à la base :", err));

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur en écoute sur http://localhost:${PORT}`);
});