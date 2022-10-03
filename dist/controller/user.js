"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUser = exports.sayHello = void 0;
const users = [
    { name: "Elon Musk", age: 52, ceo: ["Tesla", "SpaceX", "NeuraLink"], fortuna: 250000000000 },
    { name: "Jeff Bezos", age: 58, ceo: ["Amazon", "Blue Origin"], fortuna: 150000000000 },
    { name: "Bill Gates", age: 65, ceo: ["Amazon", "Blue Origin"], fortuna: 110000000000 },
    { name: "Larry Ellison", age: 78, ceo: ["Oracle"], fortuna: 87000000000 }
];
const sayHello = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.status(200).json({ message: 'Hello World' });
});
exports.sayHello = sayHello;
const getAllUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.status(200).json(users);
});
exports.getAllUser = getAllUser;
//# sourceMappingURL=user.js.map