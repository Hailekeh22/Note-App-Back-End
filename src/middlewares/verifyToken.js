import { secret } from "../Constants.js";
import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  const token = req.headers["authorizaation"]?.split(" ")[1];

  if (!token) {
    res.status(403).send("Token Required");
  }

  await jwt.verify(token, secret, (err, user) => {
    if (err) {
      res.send("Invalid Token");
    }
    req.user = user;
    next();
  });
};
