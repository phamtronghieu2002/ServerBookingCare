'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {

    static associate(models) {

    }
  }
  Booking.init({
    date: DataTypes.DATE,
    timeType: DataTypes.STRING,
    statusId:  DataTypes.INTEGER,
    doctorId:  DataTypes.INTEGER,
    patientId:  DataTypes.INTEGER

    
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};