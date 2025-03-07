"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerValidator = exports.loginValidator = void 0;
const express_validator_1 = require("express-validator");
const user_services_1 = __importDefault(require("~/services/user.services"));
const validation_1 = require("~/utils/validation");
const loginValidator = (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({ error: 'Missing email or password' });
        return;
    }
    next();
};
exports.loginValidator = loginValidator;
exports.registerValidator = (0, validation_1.validate)((0, express_validator_1.checkSchema)({
    name: {
        isString: true,
        notEmpty: true,
        isLength: {
            options: {
                min: 1,
                max: 100
            }
        },
        trim: true
    },
    email: {
        notEmpty: true,
        isEmail: true,
        trim: true,
        custom: {
            options: async (value) => {
                const isExistEmail = await user_services_1.default.checkEmailExist(value);
                if (isExistEmail) {
                    throw new Error('Email already exist');
                }
                return true;
            }
        }
    },
    password: {
        notEmpty: true,
        isString: true,
        isLength: {
            options: {
                min: 6,
                max: 50
            }
        },
        isStrongPassword: {
            options: {
                minLength: 6,
                minLowercase: 1,
                minUppercase: 1,
                minSymbols: 1
            }
        }
    },
    confirm_password: {
        notEmpty: true,
        isString: true,
        isLength: {
            options: {
                min: 6,
                max: 50
            }
        },
        isStrongPassword: {
            options: {
                minLength: 6,
                minLowercase: 1,
                minUppercase: 1,
                minSymbols: 1
            }
        },
        custom: {
            options: (value, { req }) => {
                if (value !== req.body.password) {
                    throw new Error('Confirm Password does not match password!');
                }
                return true;
            }
        }
    },
    date_of_birth: {
        isISO8601: {
            options: {
                strict: true,
                strictSeparator: true
            }
        }
    }
}));
