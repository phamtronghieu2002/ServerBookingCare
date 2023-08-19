import sequelize from "../configs/Database";
import { Allcode } from "../models/allCodes";
import bcrypt from  'bcrypt';
export const handleLogin = async (data)=>{

    const res={}
     
    const {key,type,valueEN,valueVN} = data
      
    if(!key || ! type || !valueEN || !valueVN)
    {
        res.message="vui lòng điền đủ thông tin"
        res.status =0
        res.data={}

        return res;
    }
    let code =  await Allcode.findOne({ where: { key },raw:true});
    console.log(code)
    if(code)
      {
      
       const check= bcrypt.compareSync(type, code.type)
        

            if(check)
            {
        delete code['type'];       
        res.message="login success!"
        res.status =1
        res.data=code
        return res;
            }
            res.message="error password"
            res.status =0
            res.data={}
            return res;

           

       
    }
 
    res.message="không tồn tại email"
    res.status =0
    res.data={}

    return res;
}