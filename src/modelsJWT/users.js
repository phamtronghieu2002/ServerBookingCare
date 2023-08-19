
import { DataTypes } from 'sequelize';
export const user= (sequelize)=>{
  return sequelize.define("users", {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING, 
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
   
 });
}



