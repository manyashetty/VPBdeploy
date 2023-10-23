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
exports.deleteTestimonial = exports.updateTestimonial = exports.createTestimonial = exports.getTestimonial = void 0;
const testimonial_model_js_1 = __importDefault(require("../models/testimonial.model.js"));
const auth_middleware_js_1 = require("../routes/auth.middleware.js");
const getTestimonial = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const testimonial = yield testimonial_model_js_1.default.find();
        res.status(200).json(testimonial);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.getTestimonial = getTestimonial;
exports.createTestimonial = [auth_middleware_js_1.authenticateJWT, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { name, comment, image_url } = req.body;
        if (!name || !comment || !image_url) {
            return res.status(400).json({ error: 'Name ,description and image_url are required' });
        }
        try {
            const testimonial = new testimonial_model_js_1.default({ name, comment, image_url, owner: req.userId });
            yield testimonial.save();
            res.status(201).json(testimonial);
        }
        catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }),
];
exports.updateTestimonial = [auth_middleware_js_1.authenticateJWT, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const TestimonialId = req.params.id;
            const { name, comment, image_url } = req.body;
            // Check if the service exists
            const existingTestimonial = yield testimonial_model_js_1.default.findById(TestimonialId);
            if (!existingTestimonial) {
                return res.status(404).json({ error: 'Testimonial not found' });
            }
            // Update the service
            if (name) {
                existingTestimonial.name = name;
            }
            if (comment) {
                existingTestimonial.comment = comment;
            }
            if (image_url) {
                existingTestimonial.image_url = image_url;
            }
            // Save the updated service
            const updatedTestimonial = yield existingTestimonial.save();
            res.status(200).json(updatedTestimonial);
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }),
];
const deleteTestimonial = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const testimonialId = req.params.id;
        // Check if the service exists
        const existingTestimonial = yield testimonial_model_js_1.default.findById(testimonialId);
        if (!existingTestimonial) {
            return res.status(404).json({ error: 'Testimonial not found' });
        }
        // Delete the service using deleteOne
        yield testimonial_model_js_1.default.deleteOne({ _id: testimonialId });
        res.status(204).json({ message: "testimonialdeleted" }); // deleted
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.deleteTestimonial = deleteTestimonial;
