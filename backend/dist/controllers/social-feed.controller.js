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
exports.deleteSocialfeed = exports.updateSocialfeed = exports.createSocialfeed = exports.getSocialfeed = void 0;
const social_feed_model_js_1 = __importDefault(require("../models/social-feed.model.js"));
const auth_middleware_js_1 = require("../routes/auth.middleware.js");
const getSocialfeed = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const socialfeed = yield social_feed_model_js_1.default.find();
        res.status(200).json(socialfeed);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.getSocialfeed = getSocialfeed;
exports.createSocialfeed = [auth_middleware_js_1.authenticateJWT, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { image, platform, content } = req.body;
        if (!platform || !content || !image) {
            return res.status(400).json({ error: 'Platform or image or content is missing' });
        }
        try {
            const socialfeed = new social_feed_model_js_1.default({ image, platform, content, owner: req.userId });
            yield socialfeed.save();
            res.status(201).json(socialfeed);
        }
        catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }),
];
exports.updateSocialfeed = [auth_middleware_js_1.authenticateJWT, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const socialfeedId = req.params.id;
            const { image, platform, content } = req.body;
            // Check if the service exists
            const existingSocialfeed = yield social_feed_model_js_1.default.findById(socialfeedId);
            if (!existingSocialfeed) {
                return res.status(404).json({ error: 'Socialfeed not found' });
            }
            // Update the service
            if (image) {
                existingSocialfeed.image = image;
            }
            if (platform) {
                existingSocialfeed.platform = platform;
            }
            if (content) {
                existingSocialfeed.content = content;
            }
            // Save the updated service
            const updatedSocialfeed = yield existingSocialfeed.save();
            res.status(200).json(updatedSocialfeed);
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }),
];
const deleteSocialfeed = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const socialfeedId = req.params.id;
        // Check if the service exists
        const existingSocialfeed = yield social_feed_model_js_1.default.findById(socialfeedId);
        if (!existingSocialfeed) {
            return res.status(404).json({ error: 'Service not found' });
        }
        // Delete the service using deleteOne
        yield social_feed_model_js_1.default.deleteOne({ _id: socialfeedId });
        res.status(204).json({ message: "Socialfeed deleted" }); // deleted
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.deleteSocialfeed = deleteSocialfeed;
