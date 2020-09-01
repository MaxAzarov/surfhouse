import { Request, Response, NextFunction } from "express";

const jwt = require("jsonwebtoken");

const isAuth = (req: Request, res: Response, next: NextFunction) => {
  let token = (req as any).header("Authorization");
  if (!token) {
    (req as any).isAuth = false;
    return next();
  }
  token = token.replace("Bearer ", "");
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, "mysecret");
  } catch (err) {
    (req as any).isAuth = false;
    return next();
  }
  if (!decodedToken) {
    (req as any).isAuth = false;
    return next();
  }
  (req as any).userId = decodedToken.id;
  (req as any).isAuth = true;
  next();
};
export default isAuth;
