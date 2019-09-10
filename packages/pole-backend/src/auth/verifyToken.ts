import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export interface IGetUserAuthInfoRequest extends Request {
  user: string | object;
}

module.exports = function(
  req: IGetUserAuthInfoRequest,
  res: Response,
  next: NextFunction
) {
  const token = req.header('auth-token');
  if (!token) return res.status(401).send('Access Denied');

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send('Invalid Token');
  }
};
