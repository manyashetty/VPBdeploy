"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const SocialfeedSchema = new mongoose_1.Schema({
    image: String,
    platform: String,
    content: String,
    created_at: { type: Date, default: Date.now() },
    owner: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User'
    }
});
const SocialfeedModel = (0, mongoose_1.model)('Socialfeed', SocialfeedSchema);
exports.default = SocialfeedModel;
