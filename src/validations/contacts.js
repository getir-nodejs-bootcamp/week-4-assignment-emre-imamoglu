const Joi = require("joi");

const createContact = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  address: Joi.string().required(),
  birthdate: Joi.date().required(),
});

module.exports = {
  createContact,
};
