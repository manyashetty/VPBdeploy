"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteService = exports.updateService = exports.createService = exports.getServiceById = exports.getServices = void 0;
const service_model_js_1 = __importDefault(require("../models/service.model.js"));
const auth_middleware_js_1 = require("../routes/auth.middleware.js");
// import multerConfig from "../routes/mutler.js";
// import { S3 } from 'aws-sdk';
// import S3Instance from './s3client.js';
// import { generatePublicPresignedUrl } from "../routes/mutler.js";
const getServices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const services = yield service_model_js_1.default.find();
        res.status(200).json(services);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.getServices = getServices;
const getServiceById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const serviceId = req.params.id;
        const service = yield service_model_js_1.default.findById(serviceId);
        if (service) {
            console.log(service);
            res.status(200).json(service);
        }
        else {
            const allServices = yield service_model_js_1.default.find();
            res.status(404).json({ error: "Service not found", allServices: allServices });
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
    }
});
exports.getServiceById = getServiceById;
exports.createService = [auth_middleware_js_1.authenticateJWT, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const serviceData = req.body;
        console.log(serviceData);
        const { name, description, image_url } = req.body;
        if (!name || !description) {
            console.log();
            return res.status(400).json({ error: 'Name and description are required' });
        }
        if (!image_url) {
            return res.status(400).json({ error: 'Image url is required' });
        }
        if (Object.keys(serviceData).length === 0) {
            return res.status(400).send({ status: false, msg: "No data provided" });
        }
        // const preSignedUrl: string = generatePublicPresignedUrl((req.file as Express.MulterS3.File).key);
        try {
            const service = new service_model_js_1.default({ name, description, image_url, owner: req.userId });
            yield service.save();
            res.status(201).json(service);
        }
        catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }),
];
exports.updateService = [auth_middleware_js_1.authenticateJWT, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const serviceId = req.params.id;
            const { name, description } = req.body;
            // Check if the service exists
            const existingService = yield service_model_js_1.default.findById(serviceId);
            if (!existingService) {
                return res.status(404).json({ error: 'Service not found' });
            }
            // Update the service
            if (name) {
                existingService.name = name;
            }
            if (description) {
                existingService.description = description;
            }
            // Save the updated service
            const updatedService = yield existingService.save();
            res.status(200).json(updatedService);
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }),
];
exports.deleteService = [auth_middleware_js_1.authenticateJWT, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const serviceId = req.params.id;
            // Check if the service exists
            const existingService = yield service_model_js_1.default.findById(serviceId);
            if (!existingService) {
                return res.status(404).json({ error: 'Service not found' });
            }
            // const imageKey = existingService.image_url;
            //delete function for img in bucket 
            // const deleteImageFromS3 = (imageKey: string, s3: S3): Promise<void> => {
            //   const params: S3.DeleteObjectRequest = {
            //     Bucket: process.env.WASABI_BUCKET as string,
            //     Key: imageKey,
            //   };
            //   return new Promise<void>((resolve, reject) => {
            //     s3.deleteObject(params, (err, data) => {
            //       if (err) {
            //         reject(err);
            //       } else {
            //         resolve();
            //       }
            //     });
            //   });
            // };
            // Delete the service using deleteOne
            // await ServiceModel.deleteOne({ _id: serviceId });
            // await deleteImageFromS3(imageKey, S3Instance);
            // res.status(204).json({message:"Servicedeleted"}); // deleted
        }
        catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }),
];
// function deleteImageFromS3(imageKey: string, s3: S3) {
//   throw new Error('Function not implemented.');
// }
