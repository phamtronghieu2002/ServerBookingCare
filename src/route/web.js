import express from "express";
import * as userController from "..//JWTcontroller/userController"
import middlewares from "../middlewares";

const router = express.Router();






const InitApiRoute =app =>{

  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });




  router.post("/signUp",middlewares.verifySignUp.checkExitEmail,userController.handleRegister)
  router.post("/signIn",userController.handleLogin)
  
  router.get("/admin",middlewares.authJWT.verifyToken,userController.handlegetAdminBoard);
  // router.put("/User/:id",apiController.handleEditUser);
  // router.delete("/User/:id",apiController.handleDeleteUser);

  

  app.use("/api/v1", router); 
}

export {InitApiRoute};
 