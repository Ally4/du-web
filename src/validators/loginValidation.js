import Joi from 'joi';

export const login = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().min(1).max(15).required(),
});

export const loginValidationError = (req, res, next) => {
  const { error } = login.validate(req.body);
  if (error) {
    return res.status(400).json({
      status: 400,
      message: error.details[0].message.replace(/"/g, ''),
    });
  }
  next();
};
