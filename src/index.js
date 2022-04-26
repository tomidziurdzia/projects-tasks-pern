import app from "./app.js";
import { sequelize } from "./db/db.js";

import "./models/Project.js";

const main = async () => {
  await sequelize.sync({ force: true });
  try {
    await sequelize.sync();
    console.log("Connection has been established successfully");
    app.listen(4000);
    console.log("Server is listening on port", 4000);
  } catch (error) {
    console.log("Unable to connect to the database", error);
  }
};

main();
