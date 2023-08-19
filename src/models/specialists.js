import { DataTypes } from "sequelize";

export const Specialists = (sequelize) =>
  sequelize.define("specialists", {
    descriptions: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    img: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
