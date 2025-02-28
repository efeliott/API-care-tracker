import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";
import Planning from "./Planning";

class Tache extends Model {}

Tache.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    planning_id: {
      type: DataTypes.INTEGER,
      allowNull: false, // Une tâche appartient forcément à un planning
      references: {
        model: Planning,
        key: "id",
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    heure_debut: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    heure_fin: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    statut: {
      type: DataTypes.ENUM("planifié", "en cours", "terminé", "annulé"),
      allowNull: false,
    },
  },
  { sequelize, modelName: "tache" }
);

// Relation : une tâche appartient à un planning
Tache.belongsTo(Planning, { foreignKey: "planning_id", as: "planning" });

export default Tache;