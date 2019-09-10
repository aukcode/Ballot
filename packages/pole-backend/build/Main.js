'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const jsonwebtoken_1 = __importDefault(require('jsonwebtoken'));
const dotenv_1 = __importDefault(require('dotenv'));
dotenv_1.default.config();
const app = express_1.default();
const port = 8080;
const hey = 'Hello from pole-backend';
const whiteListDomains = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  next();
};
app.use(whiteListDomains);
const authRoute = require('./auth/authenticate');
const poleRoute = require('./routes/poles');
app.use(express_1.default.json());
app.use('/api/user', authRoute);
app.use('/api/poles', poleRoute);
app.get('/hey', (req, res) => res.json({ hey }).send());
app.post('/api/login', (req, res) => {
  const user = {
    id: 1,
    username: 'auk',
    email: 'auk@gmail.com',
  };
  jsonwebtoken_1.default.sign({ user }, ' ', (err, token) => {
    res.json({
      token,
    });
  });
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
//# sourceMappingURL=Main.js.map
