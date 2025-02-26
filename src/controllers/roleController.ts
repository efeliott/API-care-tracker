import { Request, Response } from "express";
import User from "../models/User";

/**
 * Récupérer le rôle d'un utilisateur
 */
export const getUserRole = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId } = req.params;

    const user = await User.findByPk(userId);
    if (!user) {
      res.status(404).json({ message: "Utilisateur non trouvé" });
      return;
    }

    res.json({ role: user.role });
  } catch (error) {
    console.error("Erreur lors de la récupération du rôle :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

/**
 * Modifier le rôle d'un utilisateur (Admin uniquement)
 */
export const updateUserRole = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId } = req.params;
    const { role } = req.body;

    const user = await User.findByPk(userId);
    if (!user) {
      res.status(404).json({ message: "Utilisateur non trouvé" });
      return;
    }

    user.role = role;
    await user.save();

    res.json({ message: "Rôle mis à jour", user });
  } catch (error) {
    console.error("Erreur lors de la mise à jour du rôle :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

