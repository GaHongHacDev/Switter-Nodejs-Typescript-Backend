"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const signToken = ({ payload, privatekey = process.env.JWT_SECRET, options = {
    algorithm: 'HS256'
} }) => {
    return new Promise((resolve, reject) => {
        jsonwebtoken_1.default.sign(payload, privatekey, options, (err, token) => {
            if (err) {
                return reject(err);
            }
            return resolve(token);
        });
    });
};
exports.signToken = signToken;
