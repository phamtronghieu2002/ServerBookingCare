 import { Allcode } from "../models/allCodes";
 import bcrypt  from "bcrypt"

export const addUserSerivce = async(user)=>{


      const title=await hashPassword(user.title)
      return  await User.create({...user,title});
  
}

export const getAllcodeService  = async ()=>{

  return await Allcode.findAll({raw:true})

}





const hashPassword = async(password)=>{


  const saltRounds = 10 
  const salt=  await bcrypt.genSalt(saltRounds)
  return  await bcrypt.hash(password, salt)


}


