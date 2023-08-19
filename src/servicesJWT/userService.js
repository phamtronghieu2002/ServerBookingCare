import db from "../modelsJWT";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import  key from "..//configs//auth"
const hashPassword = async (password, salt) => {
  return await bcrypt.hash(password, salt);
};

export const CreateUser = async (username, email, password, roles = null) => {
  const Op = db.Sequelize.Op;
  const saltRounds = 10;
  const passwordHash = await hashPassword(password, saltRounds);

  try {
    const user = await db.user.create({
      username,
      email,
      password: passwordHash,
    });
    // console.log(Object.getOwnPropertyNames(db.user.prototype));
    if (user) {
      if (roles) {
        try {
          const Roles = await db.role.findAll({
            where: {
              name: {
                [Op.or]: roles,
              },
            },
          });

          user.setRoles(Roles);
        } catch (error) {
          console.log("loi nha >>>", error.toString());
        }
      } else {
        user.setRoles([2]);
      }

      return {
        errCode: 0,
        message: "create user success !!",
        data: {
          username,
          email,
          userId: user.id,
          roles: roles ? roles : ["User"],
        },
      };
    }

    return {
      errCode: 1,
      message: "created fail",
    };
  } catch (error) {
    console.log(error.toString());
  }
};

export const LoginUser = async (username, password) => {
  try {
    const user = await db.user.findOne({ where: { username }});
    if (user) {

     if(!bcrypt.compareSync(password,user.password))
     {
      return {
        errCode:1,
        message:"password not correct !!"
       } 
     }
     //login success
     const accessToken = jwt.sign({ id: user.id },
      key.token,
      {
        algorithm: 'HS256',
        allowInsecureKeySizes: true,
        expiresIn: 60, // 1 minutes
      });


      const freshToken = jwt.sign({ id: user.id },
        key.fresh_token,
        {
          algorithm: 'HS256',
          allowInsecureKeySizes: true,
          expiresIn: 86400, // 24 hours
        });


      // user.setRoles([1]);

     const authorities=[]
      const roles =await user.getRoles()

        roles.forEach(e => {
          authorities.push(e.name)
      
        });
    


     return {
        errCode:0,
        message:"Login sucess !!",
        accessToken,
        freshToken,
        id:user.id,
        username:user.username,
        email:user.email,
        roles:authorities
       } 


    } else {
     return {
      errCode:1,
      message:"user not found !!"
     } 
    }
  } catch (error) {

    console.log(error)

  }
};
