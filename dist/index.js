"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_routes_1 = __importDefault(require("./routes/users.routes"));
const database_services_1 = __importDefault(require("./services/database.services"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use('/users', users_routes_1.default);
database_services_1.default.connect();
app.listen(port, () => {
    console.log(`Your app listening on port ${port}`);
});
