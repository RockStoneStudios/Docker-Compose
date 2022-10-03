"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const user_1 = __importDefault(require("./router/user"));
const connection_1 = __importDefault(require("./DB/connection"));
class Server {
    constructor() {
        this.api = {
            user: '/api/users'
        };
        dotenv_1.default.config();
        this.app = (0, express_1.default)();
        this.port = parseInt(process.env.PORT);
        this.Router();
        this.Listen();
        this.DbInithialize();
    }
    Middlewares() {
        this.app.use(express_1.default.json());
    }
    Listen() {
        this.app.listen(this.port, () => {
            console.log(`Starting Server on Port --> ${this.port} .`);
        });
    }
    DbInithialize() {
        connection_1.default.sync().then(() => console.log('Database Connected Successful'))
            .catch((error) => console.log(error));
    }
    Router() {
        this.app.use(this.api.user, user_1.default);
    }
}
new Server();
//# sourceMappingURL=index.js.map