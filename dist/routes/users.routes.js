"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controllers_js_1 = require("~/controllers/users.controllers.js");
const users_middlewares_js_1 = require("~/middlewares/users.middlewares.js");
const usersRouter = (0, express_1.Router)();
usersRouter.post('/login', users_middlewares_js_1.loginValidator, users_controllers_js_1.loginController);
usersRouter.post('/register', users_middlewares_js_1.registerValidator, users_controllers_js_1.registerController);
exports.default = usersRouter;
