'use strict';
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
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const router = require('express').Router();
const User = require('../models/User');
const jsonwebtoken_1 = __importDefault(require('jsonwebtoken'));
const bcryptjs_1 = __importDefault(require('bcryptjs'));
const Validation_1 = require('../Validation');
router.post('/register', (req, res) =>
  __awaiter(this, void 0, void 0, function*() {
    const { error } = Validation_1.registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const emailExists = yield User.findOne({ email: req.body.email });
    if (emailExists) return res.status(400).send('Email already exists');
    const salt = yield bcryptjs_1.default.genSalt(10);
    const hashedPassword = yield bcryptjs_1.default.hash(
      req.body.password,
      salt
    );
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
    const { error } = Validation_1.loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const user = yield User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('Email is not found');
    const validPass = yield bcryptjs_1.default.compare(
      req.body.password,
      user.password
    );
    if (!validPass) return res.status(400).send('Invalid password');
    const token = jsonwebtoken_1.default.sign(
      { _id: user._id },
      process.env.TOKEN_SECRET
    );
    res.header('auth-token', token).send(token);
  })
);
module.exports = router;
//# sourceMappingURL=authenticate.js.map
