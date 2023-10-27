"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aws_sdk_1 = require("aws-sdk");
// Create an AWS S3 client instance
const S3Instance = new aws_sdk_1.S3({
    region: 'ap-southeast-1',
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    // You can also set other options here, if needed
});
exports.default = S3Instance;
