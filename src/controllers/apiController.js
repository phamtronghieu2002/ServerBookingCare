import { handleLogin } from "../services/loginService"
import { addUser,getUsers,editUsers,deleteUsers } from "../services/UserService"
export const getLogin= async (req,res)=>{
 
  let data=req.body
    
  let x= await handleLogin(data)
  
  return   res.status(200).json(x)
}

export const handleAddUser =async (req,res)=>{
  const uid=req.query

  console.log(uid)
  res.send("xin chao")

    

  // const result= await addUser(u)
  // console.log("result>>>",result)
  // return   res.status(200).json(result)

}

export const handleGetUsers =async (req,res)=>{

  const result= await getUsers()
  console.log("result>>>",result)
  return   res.status(200).json(result)

}


export const handleEditUser =async (req,res)=>{

  const user=req.body
  const id=req.params.id
  const result= await editUsers(user,id)
  console.log("result>>>",result)
  return   res.status(200).json(result)

}

export const handleDeleteUser =async (req,res)=>{

  const id=req.params.id
  const result= await deleteUsers(id)
  console.log("result>>>",result)
  return   res.status(200).json(result)

}

