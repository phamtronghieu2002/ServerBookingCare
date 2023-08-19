
import configsDB from '../configs/Database.js';
import { Sequelize } from 'sequelize';
import { User } from './users.js';
import { Schedule } from './schedules.js';
import { Allcode } from './allCodes.js';
import { Booking } from './bookings.js';
import { Clinics } from './clinics.js';
import { Doctors_clinics_specialists } from './Doctors_clinics_specialists.js';
import { Histories } from './histories.js';
import { Specialists } from './specialists.js';

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

 db.User=User(sequelize)
 db.Schedule=Schedule(sequelize)
 db.Allcode=Allcode(sequelize)
 db.Booking=Booking(sequelize)
 db.Clinics=Clinics(sequelize) 
 db.Histories=Histories(sequelize)
 db.Specialists=Specialists(sequelize)
 db.Doctors_clinics_specialists=Doctors_clinics_specialists(sequelize)
//association




db.Allcode.hasMany(db.Booking,{ foreignKey: "statusId"})
db.Booking.belongsTo(db.Allcode,{ foreignKey: "statusId"})

  

db.User.hasMany(db.Booking,{ foreignKey: "doctorId"})
db.User.hasMany(db.Booking,{ foreignKey: "patientId"})
db.Booking.belongsTo(db.User,{ foreignKey: "doctorId"})
db.Booking.belongsTo(db.User,{ foreignKey: "patientId"})





db.User.belongsToMany(db.Clinics, { through: db.Doctors_clinics_specialists, foreignKey: 'doctorId'});
db.Clinics.belongsToMany(db.User, { through: db.Doctors_clinics_specialists, foreignKey: 'clinicId' });

db.User.belongsToMany(db.Specialists, { through: db.Doctors_clinics_specialists, foreignKey: 'doctorId' });
db.Specialists.belongsToMany(db.User, { through: db.Doctors_clinics_specialists, foreignKey: 'specialistId' });

db.Clinics.belongsToMany(db.Specialists, { through: db.Doctors_clinics_specialists, foreignKey: 'clinicId' });
db.Specialists.belongsToMany(db.Clinics, { through: db.Doctors_clinics_specialists, foreignKey: 'specialistId' });


db.User.hasMany(db.Histories,{ foreignKey: "doctorId"})
db.User.hasMany(db.Histories,{ foreignKey: "patientId"})
db.Histories.belongsTo(db.User,{ foreignKey: "doctorId"})
db.Histories.belongsTo(db.User,{ foreignKey: "patientId"})


db.User.hasMany(db.Schedule,{ foreignKey: "doctorId"});
db.Schedule.belongsTo(db.User,{ foreignKey: "doctorId"});

// db.Allcode.hasMany(db.User,{ foreignKey: "roleId" });
// db.User.belongsTo(db.Allcode,{ foreignKey: "roleId" });

 
export default db

