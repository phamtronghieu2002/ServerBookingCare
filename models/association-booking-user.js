'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class association - booking - user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  association - booking - user.init({
    firstName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'association-booking-user',
  });
  return association - booking - user;
};