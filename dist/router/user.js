"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../controller/user");
const router = (0, express_1.Router)();
router.get('/', user_1.getAllUser);
router.get('/saludo', user_1.sayHello);
exports.default = router;
//# sourceMappingURL=user.js.map