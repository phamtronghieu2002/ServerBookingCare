import express from "express";

const router = express.Router();

 




const InitApiRoute =app =>{

  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });





  // router.put("/User/:id",apiController.handleEditUser);
  // router.delete("/User/:id",apiController.handleDeleteUser);

  

  app.use("/api/v1", router); 
}

export {InitApiRoute};
 