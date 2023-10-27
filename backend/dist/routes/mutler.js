"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.s3 = exports.generatePublicPresignedUrl = exports.upload = void 0;
const multer_s3_1 = __importDefault(require("multer-s3"));
const multer_1 = __importDefault(require("multer"));
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const dotenv_1 = __importDefault(require("dotenv"));
const client_s3_1 = require("@aws-sdk/client-s3");
dotenv_1.default.config();
// Configure AWS S3 client
const s3 = new aws_sdk_1.default.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    endpoint: 'https://s3.wasabisys.com',
});
exports.s3 = s3;
// Function to generate a 12-hour pre-signed URL for public access
const generatePublicPresignedUrl = (key) => {
    const params = {
        Bucket: process.env.WASABI_BUCKET,
        Key: key,
        Expires: 43200, // 12 hours (12 hours * 3600 seconds)
    };
    return s3.getSignedUrl('getObject', params);
};
exports.generatePublicPresignedUrl = generatePublicPresignedUrl;
const s3Config = new client_s3_1.S3Client({
    region: 'ap-southeast-1',
    credentials: {
        accessKeyId: '63OC7YN7R0OHRQ8EKJB2',
        secretAccessKey: 'CFrRYDtoDvFH8F4o4CBe7IM9ANQAVzeOyht2Le9A'
    }
});
// Configure Multer for file uploads to Wasabi
const storage = (0, multer_s3_1.default)({
    s3: s3Config,
    bucket: process.env.WASABI_BUCKET,
    key: (req, file, cb) => {
        cb(null, 'post/' + Date.now() + '_' + file.originalname);
    },
    acl: 'public-read', // Set the ACL to 'public-read' for public access
});
const upload = (0, multer_1.default)({ storage }).single('file');
exports.upload = upload;
