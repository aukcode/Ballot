// Validation
import Joi from '@hapi/joi';

// Register Validation
export const validateNewUser = data => {
  const Schema = {
    name: Joi.string()
      .min(6)
      .required(),
    email: Joi.string()
      .min(6)
      .required()
      .email(),
    password: Joi.string()
      .min(6)
      .required(),
  };
  return Joi.validate(data, Schema);
};

export const loginValidation = data => {
  const Schema = {
    email: Joi.string()
      .min(6)
      .required()
      .email(),
    password: Joi.string()
      .min(6)
      .required(),
  };
  return Joi.validate(data, Schema);
};
