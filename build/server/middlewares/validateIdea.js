"use strict";
const validateIdea = (req, res, next) => {
    const { content, autor } = req.body;
    if (!content)
        next({ statusCode: 400, message: "El contenido de la idea no puede ser vacio" });
    if (!autor)
        next({ statusCode: 400, message: "El autor no puede estar" });
    next();
};
module.exports = validateIdea;
