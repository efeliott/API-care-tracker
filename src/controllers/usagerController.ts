import { Request, Response } from "express";
import Usager from "../models/Usager";
import DossierUsager from "../models/DossierUsager";

/**
 * Récupérer les informations d'un usager
 */
export const getUsagerById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { usagerId } = req.params;

    const usager = await Usager.findByPk(usagerId, {
      include: [{ model: DossierUsager }],
    });

    if (!usager) {
      res.status(404).json({ message: "Usager non trouvé" });
      return;
    }

    res.json(usager);
  } catch (error) {
    console.error("Erreur lors de la récupération de l'usager :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

/**
 * Modifier les informations d'un usager
 */
export const updateUsager = async (req: Request, res: Response): Promise<void> => {
  try {
    const { usagerId } = req.params;
    const { nom, prenom, adresse } = req.body;

    const usager = await Usager.findByPk(usagerId);
    if (!usager) {
      res.status(404).json({ message: "Usager non trouvé" });
      return;
    }

    usager.nom = nom;
    usager.prenom = prenom;
    usager.adresse = adresse;
    await usager.save();

    res.json({ message: "Usager mis à jour", usager });
  } catch (error) {
    console.error("Erreur lors de la mise à jour de l'usager :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

/**
 * Ajouter un commentaire au dossier d'un usager
 */
export const addAgentComment = async (req: Request, res: Response): Promise<void> => {
  try {
    const { usagerId } = req.params;
    const { commentaire } = req.body;

    const dossier = await DossierUsager.findOne({ where: { usager_id: usagerId } });
    if (!dossier) {
      res.status(404).json({ message: "Dossier non trouvé" });
      return;
    }

    const notes = dossier.notes_agents ? [...dossier.notes_agents, commentaire] : [commentaire];
    dossier.notes_agents = notes;
    await dossier.save();

    res.json({ message: "Commentaire ajouté", dossier });
  } catch (error) {
    console.error("Erreur lors de l'ajout du commentaire :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};
