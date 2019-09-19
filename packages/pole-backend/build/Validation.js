'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const joi_1 = __importDefault(require('@hapi/joi'));
exports.registerValidation = data => {
  const Schema = {
    name: joi_1.default
      .string()
      .min(6)
      .required(),
    email: joi_1.default
      .string()
      .min(6)
      .required()
      .email(),
    password: joi_1.default
      .string()
      .min(6)
      .required(),
  };
  return joi_1.default.validate(data, Schema);
};
exports.loginValidation = data => {
  const Schema = {
    email: joi_1.default
      .string()
      .min(6)
      .required()
      .email(),
    password: joi_1.default
      .string()
      .min(6)
      .required(),
  };
  return joi_1.default.validate(data, Schema);
};
//# sourceMappingURL=Validation.js.map
