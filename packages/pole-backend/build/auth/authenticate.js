var __awaiter =
  (this && this.__awaiter) ||
  function(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : new P(function(resolve) {
              resolve(result.value);
            }).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
const router = require('express').Router();
const User = require('../model/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { registerValidation, loginValidation } = require('../validation');
router.post('/register', (req, res) =>
  __awaiter(this, void 0, void 0, function*() {
    const { error } = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const emailExists = yield User.findOne({ email: req.body.email });
    if (emailExists) return res.status(400).send('Email already exists');
    const salt = yield bcrypt.genSalt(10);
    const hashedPassword = yield bcrypt.hash(req.body.password, salt);
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    try {
      const savedUser = yield user.save();
      res.send({ user: user.id });
    } catch (err) {
      res.status(400).send(err);
    }
  })
);
router.post('/login', (req, res) =>
  __awaiter(this, void 0, void 0, function*() {
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const user = yield User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('Email is not found');
    const validPass = yield bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send('Invalid password');
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);
  })
);
module.exports = router;
//# sourceMappingURL=authenticate.js.map
