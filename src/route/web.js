import express from "express";
import * as AllcodeController from "..//controllers//AllcodeController";
import * as UserController from "..//controllers//UserController";
import * as DoctorController from "..//controllers//DoctorController";
import * as MarkdownController from  "..//controllers//MardownController"
const router = express.Router();

const InitApiRoute = (app) => {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  router.get("/allcode/:typeID", AllcodeController.handleGetAllcode);
  router.get("/user/role/:roleid", UserController.handleGetUserByRole);
  router.post("/user/:descriminator", UserController.handleAddUser);
  router.post("/user", UserController.handleAddUser);
  router.get("/doctors", DoctorController.handleGetAllDoctor);
  router.get("/doctors/limit/:limit", DoctorController.handleGetDoctorLimit);
  router.get("/doctor/:id", DoctorController.handleGetDoctorById);
  router.post("/markdown/:descriminator", MarkdownController.handleAddMarkdown);
 router.post("/schedule",UserController.handleSchedule)


  app.use("/api/v1", router);
};

export { InitApiRoute };
