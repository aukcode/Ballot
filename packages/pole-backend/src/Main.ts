import express, { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 8080;

const hey = 'Hello from pole-backend';

const whiteListDomains = (req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  next();
};

app.use(whiteListDomains);

// IMPORT ROUTES
const authRoute = require('./auth/authenticate');
const poleRoute = require('./routes/poles');

//  CONNECT DB
// mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
//   console.log('connected to db!')
// );

// MIDDLEWARE
app.use(express.json());

// ROUTES
app.use('/api/user', authRoute);
app.use('/api/poles', poleRoute);

app.get('/hey', (req: Request, res: Response) => res.json({ hey }).send());

// app.get('/api', verifyToken, (req: Request, res: Response) => {
//   jwt.verify(req.token, 'secretkey', (err, authData) => {
//     if (err) {
//       res.sendStatus(403);
//     } else {
//       res
//         .json({
//           message: 'Welcome to the API now',
//           authData,
//         })
//         .send();
//     }
//   });
// });

app.post('/api/login', (req: Request, res: Response) => {
  // Mock user
  const user = {
    id: 1,
    username: 'auk',
    email: 'auk@gmail.com',
  };
  jwt.sign({ user }, ' ', (err, token) => {
    res.json({
      token,
    });
  });
});

// function verifyToken(req: Request, res: Response, next) {
//   const bearerHeader = req.headers['authorization'];
//   if (!bearerHeader) {
//     res.sendStatus(403);
//   }
//   const bearer = bearerHeader.split(' ');
//   const bearerToken = bearer[1];
//   req.token = bearerToken;
//   next();
// }

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
