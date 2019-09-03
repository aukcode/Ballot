'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const jwt = require('jsonwebtoken');
const mongoose_1 = __importDefault(require('mongoose'));
const app = express_1.default();
const port = 8080;
const hey = 'Hello from pole-backend';
const whiteListDomains = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  next();
};
app.use(whiteListDomains);
const authRoute = require('auth/authenticate');
const poleRoute = require('routes/poles');
mongoose_1.default.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true },
  () => console.log('connected to db!')
);
app.use('api/user', authRoute);
app.use('api/poles', poleRoute);
app.get('/hey', (req, res) => res.json({ hey }).send());
app.post('/api/login', (req, res) => {
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
//# sourceMappingURL=Main.js.map
