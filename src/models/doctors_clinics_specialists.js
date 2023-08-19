import { DataTypes } from "sequelize";

export const Doctors_clinics_specialists = (sequelize) =>
  sequelize.define("doctors_clinics_specialists", {
    doctorId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'User',
        key: 'id',
      },
    },
    clinicId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'Clinics',
        key: 'id',
      },
    },
    specialistId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'Specialists',
        key: 'id',
      },
    },
  });
