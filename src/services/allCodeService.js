import { Allcode } from "../models/allCodes";



export const getAllcode = async (type)=>{


    if(!type)
    {
            return {
                errCode:1,
                message:"missing params"
            }
    }
try {
    const allCodes = await Allcode.findAll({raw:true, where: {
        type
      }});

      return {
        errCode:0,
        message:"ok",
        data:allCodes
    }
} catch (error) {
    return {
        errCode:2,
        message:error.toString()
    }
}


}