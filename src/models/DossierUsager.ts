import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";

class DossierUsager extends Model {}

DossierUsager.init({
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  usager_id: { type: DataTypes.INTEGER, references: { model: "Usagers", key: "id" }, allowNull: false },
  historique_interventions: { type: DataTypes.JSON, allowNull: true },
  instructions_specifiques: { type: DataTypes.TEXT, allowNull: true },
  etat_sante: { type: DataTypes.TEXT, allowNull: true },
  notes_agents: { type: DataTypes.JSON, allowNull: true },
}, {
  sequelize,
  modelName: "DossierUsager",
});

export default DossierUsager;
