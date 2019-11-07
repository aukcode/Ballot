import express, { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();
const port = 8080;

const whiteListDomains = (req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  next();
};

app.use(whiteListDomains);
dotenv.config();

// CONNECT DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
  console.log('connected to db!')
);

// MIDDLEWARE
app.use(express.json());

// IMPORT ROUTES
const authRoute = require('./auth/authenticate');
const pollsRoute = require('./routes/Polls');

// ROUTES
app.use('/api/users', authRoute);
app.use('/api/polls', pollsRoute);

const hey = 'Hello from ballot-web-backend';
app.get('/hey', (req: Request, res: Response) => res.json({ hey }).send());

app.listen(port, () => console.log(`Listening on port ${port}!`));
