'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clinic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      
      Clinic.hasMany(models.Markdown, { foreignKey: 'clinicId', as: 'clinicInfor' });

      Clinic.belongsToMany(models.User, { through: 'doctor_clinic_specialties', as: 'user' });
      Clinic.belongsToMany(models.Specialist, { through: 'doctor_clinic_specialties', as: 'specialty' });
    }
  }
  Clinic.init({
    descriptions: DataTypes.STRING,
    address: DataTypes.STRING,
    img: DataTypes.BLOB('long'),
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Clinic',
  });
  return Clinic;
};