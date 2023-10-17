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
exports.deleteService = exports.updateService = exports.createService = exports.getServices = void 0;
const service_model_js_1 = __importDefault(require("../models/service.model.js"));
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
const createService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description } = req.body;
    if (!name || !description) {
        return res.status(400).json({ error: 'Name and description are required' });
    }
    try {
        const service = new service_model_js_1.default({ name, description });
        yield service.save();
        res.status(201).json(service);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.createService = createService;
const updateService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
});
exports.updateService = updateService;
const deleteService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const serviceId = req.params.id;
        // Check if the service exists
        const existingService = yield service_model_js_1.default.findById(serviceId);
        if (!existingService) {
            return res.status(404).json({ error: 'Service not found' });
        }
        // Delete the service using deleteOne
        yield service_model_js_1.default.deleteOne({ _id: serviceId });
        res.status(204).json(); // No Content
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.deleteService = deleteService;
