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
   * Ajouter un nouveau rôle (Si les rôles sont dynamiques et stockés en base)
   */
  export const createRole = async (req: Request, res: Response): Promise<void> => {
    try {
      const { role } = req.body;
  
      // Si les rôles sont stockés dans la base, il faut les insérer ici.
      // Exemple : Si tu as un modèle Role, tu peux faire `await Role.create({ nom: role })`
  
      res.json({ message: `Rôle "${role}" ajouté avec succès` });
    } catch (error) {
      console.error("Erreur lors de l'ajout du rôle :", error);
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

/**
 * Associer un rôle à un utilisateur (Admin uniquement)
 */
export const assignRoleToUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const { userId } = req.params;
      const { role } = req.body;
  
      if (!["admin", "agent", "usager"].includes(role)) {
        res.status(400).json({ message: "Rôle invalide" });
        return;
      }
  
      const user = await User.findByPk(userId);
      if (!user) {
        res.status(404).json({ message: "Utilisateur non trouvé" });
        return;
      }
  
      user.role = role;
      await user.save();
  
      res.json({ message: `Rôle "${role}" attribué à l'utilisateur`, user });
    } catch (error) {
      console.error("Erreur lors de l'attribution du rôle :", error);
      res.status(500).json({ message: "Erreur serveur" });
    }
  };
  
