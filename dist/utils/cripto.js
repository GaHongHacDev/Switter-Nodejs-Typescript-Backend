"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sha256 = sha256;
exports.hashPassword = hashPassword;
const node_crypto_1 = require("node:crypto");
function sha256(content) {
    return (0, node_crypto_1.createHash)('sha256').update(content).digest('hex');
}
function hashPassword(password) {
    return sha256(password + process.env.PASSWORD_SECRET);
}
