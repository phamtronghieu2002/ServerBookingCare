
import { DataTypes } from 'sequelize';



export  const fresh_token= (sequelize)=>{

  return sequelize.define("fresh_tokens", {
    token: {
      type: DataTypes.STRING,
      allowNull: false
    },
    expirationDate: {
        type: DataTypes.DATE,
        allowNull: false
      }
   
 })
}



