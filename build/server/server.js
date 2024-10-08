"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const index_1 = __importDefault(require("./routes/index"));
const app = (0, express_1.default)();
app.use(express_1.default.static(path_1.default.join(__dirname, 'views')));
app.set('views', path_1.default.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
app.use((0, cors_1.default)());
app.use(index_1.default);
app.use((err, req, res, next) => {
    res
        .status(err.statusCode || 500)
        .json({ message: err.message });
    next();
});
module.exports = app;
