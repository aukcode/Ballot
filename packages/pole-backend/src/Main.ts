import express, { Request, Response, NextFunction } from 'express';
const jwt = require('jsonwebtoken');
const app = express();
const port = 8080;

const hey = 'Hello from pole-backend';

/* 
    1. Implement POST endpoint (think Collections)
    2. Setup MongoDB
    3. Setup Mongoose
*/

const whiteListDomains = (req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  next();
};

app.use(whiteListDomains);

app.get('/hey', (req: Request, res: Response) => res.json({ hey }).send());

app.get('/api', (req: Request, res: Response) =>
  res
    .json({
      message: 'Welcome to the API now',
    })
    .send()
);

app.post('/api/login', (req: Request, res: Response) => {
  // Mock user
  const user = {
    id: 1,
    username: 'auk',
    email: 'auk@gmail.com',
  };
  jwt.sign({ user }, 'secretkey', (err, token) => {
    res.json({
      token,
    });
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
