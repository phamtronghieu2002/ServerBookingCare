import { DataTypes } from "sequelize";

export const User = (sequelize) =>
  sequelize.define("users", {
    // email: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // password: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // firstname: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // lastname: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // gender: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // address: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // phonenumber: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // position: {
    //   type: DataTypes.STRING,
    //   allowNull: true, 
    // },
    image: {
      type: DataTypes.BLOB('long'),
      allowNull: false
    }
    // discriminator: {
    //   type: DataTypes.STRING,
    //   allowNull: false
    // },
  });
