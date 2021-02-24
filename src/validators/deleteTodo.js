import Joi from 'joi';

export const deleteTodo = Joi.object().keys({
  id: Joi.number().min(1).max(15).required(),
});

export const deleteValidationError = (req, res, next) => {
  const { error } = deleteTodo.validate(req.body);
  if (error) {
    return res.status(400).json({
      status: 400,
      message: error.details[0].message.replace(/"/g, ''),
    });
  }
  next();
};