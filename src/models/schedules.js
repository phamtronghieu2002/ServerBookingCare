import { DataTypes } from "sequelize";

export const Schedule = (sequelize) =>
  sequelize.define("schedules", {
    currentNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    maxNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    timeType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
