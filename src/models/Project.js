import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";
import { Task } from "./Task.js";

export const Project = sequelize.define("projects", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    unique: true,
  },
  description: {
    type: DataTypes.STRING,
  },
});

Project.hasMany(Task, {
  foreignKey: "projectId",
  sourceKey: "id",
});

Task.belongsTo(Project, {
  foreignKey: "projectId",
  sourceKey: "id",
  targetId: "id",
});
