const Joi = require('joi');

const userSchema = Joi.object({
  displayName: Joi.string().min(8).required().label('displayName'),
  email: Joi.string().email().required().label('email'),
  password: Joi.string().min(6).required().label('password'),
  image: Joi.string(),
}).messages({
  'any.required': 'O campo {#label} é obrigatório',
  'string.min': '{#label} length must be at least {#limit} characters long',
  'string.email': '"email" must be a valid email',
});

const categorySchema = Joi.object({
  name: Joi.string().min(1).required().label('name'),
}).messages({
  'any.required': '{#label} is required',
  'string.min': '{#label} length must be at least {#limit} characters long',
});

module.exports = {
  userSchema,
  categorySchema,
};