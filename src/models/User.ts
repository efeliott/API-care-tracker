import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "../config/database";

// Définition des attributs attendus pour un utilisateur
interface UserAttributes {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  mot_de_passe: string;
  role: "admin" | "agent" | "usager";
}

// Sequelize exige que les champs facultatifs soient explicitement définis
interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number;
  public nom!: string;
  public prenom!: string;
  public email!: string;
  public mot_de_passe!: string;
  public role!: "admin" | "agent" | "usager";
}

User.init({
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  nom: { type: DataTypes.STRING, allowNull: false },
  prenom: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  mot_de_passe: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.ENUM("admin", "agent", "usager"), allowNull: false },
}, {
  sequelize,
  modelName: "User",
  tableName: "Users",
  timestamps: true,
});

export default User;