import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/database";

class Tache extends Model {}

Tache.init({
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  usager_id: { type: DataTypes.INTEGER, references: { model: "Usagers", key: "id" }, allowNull: false },
  agent_id: { type: DataTypes.INTEGER, references: { model: "Users", key: "id" }, allowNull: false },
  date: { type: DataTypes.DATEONLY, allowNull: false },
  heure_debut: { type: DataTypes.TIME, allowNull: false },
  heure_fin: { type: DataTypes.TIME, allowNull: false },
  type_intervention: { type: DataTypes.STRING, allowNull: false },
}, {
  sequelize,
  modelName: "Tache",
});

export default Tache;
