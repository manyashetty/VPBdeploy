"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TestimonialSchema = new mongoose_1.Schema({
    name: String,
    comment: String,
    image_url: String,
    created_at: { type: Date, default: Date.now },
    owner: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User'
    }
});
const TestimonialModel = (0, mongoose_1.model)('Testimonial', TestimonialSchema);
exports.default = TestimonialModel;
