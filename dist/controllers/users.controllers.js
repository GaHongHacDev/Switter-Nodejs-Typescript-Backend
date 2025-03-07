"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerController = exports.loginController = void 0;
const user_services_1 = __importDefault(require("~/services/user.services"));
const loginController = async (req, res) => {
    const { email, password } = req.body;
    if (email === 'tienxuantrap@gmail.com' && password === '123456') {
        res.json({
            message: 'Login success'
        });
        return;
    }
    return void res.status(400).json({
        error: 'Login Failed'
    });
};
exports.loginController = loginController;
const registerController = async (req, res) => {
    try {
        const result = await user_services_1.default.register(req.body);
        res.json({
            message: 'Register success',
            result
        });
        return;
    }
    catch (error) {
        res.status(400).json({
            message: `Register failed, ${error}`
        });
        return;
    }
};
exports.registerController = registerController;
