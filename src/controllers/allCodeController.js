import {Allcode} from "..//models//allCodes"
import { getAllcode } from "../services/allCodeService";
import bcrypt from  'bcrypt';


const hashPassword = async password=>{


  const saltRounds = 10;
  return   await bcrypt.hash(password, saltRounds)
 

}
export const getAddAllcode =(rep,res)=>{
   

    return res.render("allCode.ejs")
}





export const addAllcode = async (req,res)=>{

 const data=req.body;

 
  try {
      if(data)
      {
   
         const typeHash =await hashPassword(data.type)
           
          await Allcode.create({...data, type: typeHash});
      }
  } catch (e) {
      alert(e)
  }
 res.send("add success !!!")
}

export const handleGetAllcode =async (req,res)=>{
  
  const type= req.query.type
  

  const data = await getAllcode(type)
  
  return res.status(200).json(data)


}


export const deleteCode = async (req,res)=>{
  
  const id= req.params.id
  console.log(typeof(id))
    try {
    if(id)
    {
      await Allcode.destroy({
        where: {
          id:id
        }
      });
    }    
  } catch (error) {
    logger.error(err);
  }

  res.redirect('/handleGetAllcode')
}
export const editCode =async (req,res)=>{
       
  const id=req.params.id
  const {key,type,valueEN,valueVN}=req.body

  try {
 if(id)
 {
  await Allcode.update(
    { key: key,
      type:type,
      valueEN:valueEN,
      valueVN:valueVN
    },
    { where: { id: id } }
  );
 }  
  } catch (err) {
    logger.error(err);
  }
 
  res.redirect('/getAllcode')

}