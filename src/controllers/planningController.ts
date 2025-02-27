import { Request, Response } from "express";
import Planning from "../models/Planning";
import Task from "../models/Tache";

/**
 * Attribuer une tâche à un agent
 */
export const assignTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const { agent_id, tache_id, date } = req.body;

    const planning = await Planning.create({
      agent_id,
      tache_id,
      date,
      statut_validation: false,
    });

    res.status(201).json({ message: "Tâche assignée avec succès", planning });
  } catch (error) {
    console.error("Erreur lors de l'assignation de la tâche :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

/**
 * Récupérer le planning d'un agent
 */
export const getAgentPlanning = async (req: Request, res: Response): Promise<void> => {
  try {
    const { agentId } = req.params;

    const planning = await Planning.findAll({
      where: { agent_id: agentId },
      include: [{ model: Task }],
    });

    res.json(planning);
  } catch (error) {
    console.error("Erreur lors de la récupération du planning :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

/**
 * Modifier une tâche attribuée
 */
export const updateTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const { planningId } = req.params;
    const { date, statut_validation } = req.body;

    const planning = await Planning.findByPk(planningId);
    if (!planning) {
      res.status(404).json({ message: "Planning non trouvé" });
      return;
    }

    planning.date = date;
    planning.statut_validation = statut_validation;
    await planning.save();

    res.json({ message: "Tâche mise à jour avec succès", planning });
  } catch (error) {
    console.error("Erreur lors de la mise à jour :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};
