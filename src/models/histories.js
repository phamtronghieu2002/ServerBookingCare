
import { DataTypes } from 'sequelize';


export const Histories=sequelize => sequelize.define("histories", {
    descriptions: {
      type: DataTypes.STRING,
      allowNull: false
    },
    file: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
 });


