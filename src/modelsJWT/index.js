import { Sequelize } from "sequelize";
import configsDB from "..//configs//Database.js";
import { role } from "./roles.js";
import { user } from "./users.js";
import { fresh_token } from "./fresh_token.js";
const sequelize = new Sequelize(
  configsDB.DB,
  configsDB.USER,
  configsDB.PASSWORD,
  {
    host: configsDB.HOST,
    dialect: configsDB.dialect,
    operatorsAliases: false,

    pool: {
      max: configsDB.pool.max,
      min: configsDB.pool.min,
      acquire: configsDB.pool.acquire,
      idle: configsDB.pool.idle,
    },
  }
);

const db = {
  sequelize,
  Sequelize,
};
db.ROLES = ["User", "Admin", "Moderator"];
db.user = user(sequelize);
db.role = role(sequelize);
db.fresh_token = fresh_token(sequelize);


db.user.belongsToMany(db.role, { through: "users_roles" });
db.role.belongsToMany(db.user, { through: "users_roles" });


db.user.hasOne(db.fresh_token); // A HasOne B
db.fresh_token.belongsTo(db.user); // A BelongsTo B
export default db

export {sequelize
   }
