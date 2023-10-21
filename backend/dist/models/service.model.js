"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ServiceSchema = new mongoose_1.Schema({
    name: String,
    description: String,
    image_url: String
});
const ServiceModel = (0, mongoose_1.model)('Service', ServiceSchema);
exports.default = ServiceModel;
