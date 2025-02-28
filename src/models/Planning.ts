import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";
import Tache from "./Tache";
import User from "./User";
import Usager from "./Usager";

class Planning extends Model {}

Planning.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    agent_id: {
      type: DataTypes.INTEGER,
      allowNull: true, 
      references: {
        model: User,
        key: "id",
      },
    },
    usager_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Usager,
        key: "id",
      },
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  { sequelize, modelName: "planning" }
);

Planning.hasMany(Tache, { foreignKey: "planning_id", as: "taches" });

export default Planning;