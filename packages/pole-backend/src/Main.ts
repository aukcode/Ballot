import express, { Request, Response, NextFunction } from 'express';
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

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
