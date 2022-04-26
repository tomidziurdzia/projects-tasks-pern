import { Sequelize } from "sequelize";
import {} from "dotenv/config";

const { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_USER } = process.env;

export const sequelize = new Sequelize(
  `${DB_DATABASE}`,
  `${DB_USER}`,
  `${DB_PASSWORD}`,
  {
    host: `${DB_HOST}`,
    dialect: "postgres",
  }
);
