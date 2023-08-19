import jwt from "jsonwebtoken";
import key from "../configs/auth";
import db from "..//modelsJWT";

const verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).json({
      message: "No token provided!",
    });
  }

  jwt.verify(token, key.token, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        name: 'TokenExpiredError',
        message: 'jwt expired',
      });
    }
    req.userId = decoded.id;
    next(); 
  });
};

const authJWT ={
  verifyToken
}
export default authJWT

