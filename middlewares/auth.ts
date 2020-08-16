import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const isAuth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = (req as any).header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, "mysecret");
    (req as any).token = token;
    (req as any).user = decoded;
    next();
  } catch (e) {
    res.status(401).send({ error: "Please authenticate." });
  }
};

export default isAuth;
