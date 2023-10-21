"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require('dotenv').config();
const SECRET_KEY = process.env.SECRET_KEY;
const authenticateJWT = (req, res, next) => {
    var _a;
    const token = (_a = req.header('Authorization')) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    if (!token) {
        console.log('Token missing');
        return res.status(401).json({ error: 'Unauthorized' });
    }
    console.log('Received Token:', token);
    try {
        const decoded = jsonwebtoken_1.default.verify(token, SECRET_KEY);
        if (!decoded || !decoded.userId) {
            console.log('Token verification failed - Invalid payload');
            return res.status(403).json({ error: 'Forbidden' });
        }
        req.userId = decoded.userId;
        console.log('Token verified successfully');
        next();
    }
    catch (err) {
        console.error('Token verification failed', err);
        return res.status(403).json({ error: 'Forbidden' });
    }
};
exports.authenticateJWT = authenticateJWT;
exports.default = exports.authenticateJWT;
