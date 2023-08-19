import { User } from "../models/users";
import bcrypt  from "bcrypt"

const hashPassword = async(password)=>{


    const saltRounds = 10 
    const salt=  await bcrypt.genSalt(saltRounds)
    return  await bcrypt.hash(password, salt)
  
  
  }
  

export const addUser = async (user)=>{



  console.log(user)

    try {
        if(user)
        {
           await User.create({...user,gender:user.gender==="nam" ?1:0 ,password:await hashPassword(user.password)  });
           return {
            errCode:0,
            message:"ok",
            user
           }
        }

    } catch (error) {
        return {
            errCode:0,
            message:error
           }
    }




}

export const getUsers  =async ()=>{

  try {
    const users = await User.findAll({raw:true});
    console.log(users)
    if(users)
    {
      users.forEach((u)=>delete u.password)
      console.log(users)
      return {
        errCode:0,
        message:"ok",
        users
       }
    }
  } catch (error) {
    return {
      errCode:1,
      message:error
     }
  }




}

export const editUsers = async (user,id)=>{

try {
  if(user)
  {
    await User.update(user, {
      where: {
        id
      }
    });

    return {
      errCode:0,
      message:"ok",
      updatedAt:new Date()
    }

  }
} catch (error) {
  return {
    errCode:1,
    message:error.toString()
  }
}

  
}

export const deleteUsers =async  (id)=>{

  try {
  
    await User.destroy({
      where: {
        id
      }
    });

    return  {
      errCode:0,
      message:"ok",
      deletedAt:new Date()
    }
  } catch (error) {
    return {
      errCode:1,
      message:error.toString()
    }
  }


}