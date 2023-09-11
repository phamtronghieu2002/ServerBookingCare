import express from "express";
//import configViewEngine from "./configs/viewEngine";
import {InitApiRoute} from './route/web'
import bodyParser from 'body-parser'
import cors from 'cors'

// import db from "./models"
require("dotenv").config();
 
const app = express();
const port = process.env.PORT || 3000;
console.log("xin chao cac bạn t");

//config engine  S
//configViewEngine(app);
app.use(cors()) 
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json());


//router
// InitWebRoute(app);
InitApiRoute(app)

// db.sequelize.sync({ force: true }).then(() => {
//    console.log(' created successfully!');
// }).catch((error) => {
//    console.error('Unable to create table : ', error);
// });
 

 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
