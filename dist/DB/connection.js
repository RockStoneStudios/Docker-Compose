"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = new sequelize_1.Sequelize('prueba-docker', 'root', '3105060237', {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});
//# sourceMappingURL=connection.js.map