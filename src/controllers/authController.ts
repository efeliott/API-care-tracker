import { Request, Response } from "express";
import User from "../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET || "secret_key";

/**
 * Inscription d'un utilisateur
 */
export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { nom, prenom, email, mot_de_passe, role } = req.body;

    // Vérifier si l'utilisateur existe déjà
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      res.status(400).json({ message: "Cet email est déjà utilisé." });
      return;
    }

    // Hacher le mot de passe
    const hashedPassword = await bcrypt.hash(mot_de_passe, 10);

    // Créer un nouvel utilisateur
    const user = await User.create({
      nom,
      prenom,
      email,
      mot_de_passe: hashedPassword,
      role,
    });

    res.status(201).json({ message: "Utilisateur créé avec succès", user });
  } catch (error) {
    console.error("Erreur lors de l'inscription :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

/**
 * Connexion d'un utilisateur
 */
export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, mot_de_passe } = req.body;

    // Vérifier si l'utilisateur existe
    const user = await User.findOne({ where: { email } });
    if (!user) {
      res.status(401).json({ message: "Identifiants invalides." });
      return;
    }

    // Vérifier le mot de passe
    const isPasswordValid = await bcrypt.compare(mot_de_passe, user.mot_de_passe);
    if (!isPasswordValid) {
      res.status(401).json({ message: "Identifiants invalides." });
      return;
    }

    // Générer le token JWT
    const token = jwt.sign({ id: user.id, role: user.role }, SECRET_KEY, {
      expiresIn: "24h",
    });

    res.json({ message: "Connexion réussie", token });
  } catch (error) {
    console.error("Erreur lors de la connexion :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};