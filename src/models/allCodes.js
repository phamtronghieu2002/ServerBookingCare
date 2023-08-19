import { DataTypes } from "sequelize";
export const Allcode = (sequelize) =>
  sequelize.define("allCodes", {
    key: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    key: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    valueEN: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    valueVN: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
