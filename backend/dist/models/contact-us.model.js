"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ContactSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    phone_no: { type: Number, required: true },
    email: { type: String, required: true, match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ },
    message: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
});
const ContactModel = (0, mongoose_1.model)('Conatct', ContactSchema);
exports.default = ContactModel;
