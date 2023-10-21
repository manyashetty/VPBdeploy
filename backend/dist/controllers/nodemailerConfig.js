"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const transporter = nodemailer_1.default.createTransport({
    service: 'your_email_service_provider',
    auth: {
        user: 'taniyashetty54321@gmail.com',
        pass: 'Password',
    },
});
exports.default = transporter;
