
import { DataTypes } from 'sequelize';



export  const role= (sequelize)=>{

  return sequelize.define("roles", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
   
 })
}



