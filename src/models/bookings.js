import { DataTypes } from "sequelize";

export const Booking = (sequelize) =>
  sequelize.define("bookings", {
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true,
    },
    timeType: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
  });
