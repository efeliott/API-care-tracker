import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/database";

class Contact extends Model {}

Contact.init({
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  usager_id: { type: DataTypes.INTEGER, references: { model: "Usagers", key: "id" }, allowNull: false },
  nom: { type: DataTypes.STRING, allowNull: false },
  telephone: { type: DataTypes.STRING, allowNull: false },
  relation: { type: DataTypes.STRING, allowNull: false },
}, {
  sequelize,
  modelName: "Contact",
});

export default Contact;
