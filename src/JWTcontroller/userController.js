import { CreateUser ,LoginUser} from "../servicesJWT/userService"


export const handleRegister =async (req,res) =>{
  
    const {username,email,password}= req.body;

    const response =await CreateUser(username,email,password)
    if(response)
    {
        return res.status(200).json(response)
    }
    return res.status(500).json("server eror")

}

export const handleLogin = async (req,res) =>{

    const {username,password}= req.body;
    const response =await LoginUser(username,password)

    return res.status(200).json(response)





}

export const handlegetAdminBoard =async (req,res)=>{


    return res.status(200).json({message:"hello admin"})
}






    



