"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenTypes = exports.UserVerifyStatus = void 0;
var UserVerifyStatus;
(function (UserVerifyStatus) {
    UserVerifyStatus[UserVerifyStatus["Unverified"] = 0] = "Unverified";
    UserVerifyStatus[UserVerifyStatus["Verified"] = 1] = "Verified";
    UserVerifyStatus[UserVerifyStatus["Banned"] = 2] = "Banned";
})(UserVerifyStatus || (exports.UserVerifyStatus = UserVerifyStatus = {}));
var TokenTypes;
(function (TokenTypes) {
    TokenTypes[TokenTypes["AccessToken"] = 0] = "AccessToken";
    TokenTypes[TokenTypes["RefreshToken"] = 1] = "RefreshToken";
    TokenTypes[TokenTypes["ForgotPasswordToken"] = 2] = "ForgotPasswordToken";
    TokenTypes[TokenTypes["EmailVerificationToken"] = 3] = "EmailVerificationToken";
})(TokenTypes || (exports.TokenTypes = TokenTypes = {}));
