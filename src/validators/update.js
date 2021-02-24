import Joi from 'joi';

export const update = Joi.object().keys({
  id: Joi.number().min(1).max(15).required(),
  title: Joi.string().min(1).max(15).required(),
  description: Joi.string().min(1).max(150).required(),
  priority: Joi.string().min(1).max(15).required(),
});

export const updateValidationError = (req, res, next) => {
  const { error } = update.validate(req.body);
  if (error) {
    return res.status(400).json({
      status: 400,
      message: error.details[0].message.replace(/"/g, ''),
    });
  }
  next();
};