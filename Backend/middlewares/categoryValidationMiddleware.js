const { body, validationResult } = require('express-validator');

function validateCategoryData() {
  return [
    body('name').notEmpty().withMessage('El campo "name" es requerido.')
  ];
}

function handleValidationErrors(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}

module.exports = {
  validateCategoryData,
  handleValidationErrors
};
