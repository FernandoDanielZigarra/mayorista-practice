function validateProductData(req, res, next) {
    const { name, description, price } = req.body;

    if (!name) {
        return res.status(400).json({ message: 'El campo "name" es requerido.' });
    }

    if (!description) {
        return res.status(400).json({ message: 'El campo "description" es requerido.' });
    }

    if (!price || isNaN(price)) {
        return res.status(400).json({ message: 'El campo "price" es requerido y debe ser un número.' });
    }

    next();
}

module.exports = validateProductData;
