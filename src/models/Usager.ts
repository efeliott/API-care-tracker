import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/database";

class Usager extends Model {}

Usager.init({
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  nom: { type: DataTypes.STRING, allowNull: false },
  prenom: { type: DataTypes.STRING, allowNull: false },
  date_naissance: { type: DataTypes.DATE, allowNull: false },
  adresse: { type: DataTypes.STRING, allowNull: false },
  badge_nfc: { type: DataTypes.STRING, allowNull: true, unique: true },
}, {
  sequelize,
  modelName: "Usager",
});

export default Usager;
