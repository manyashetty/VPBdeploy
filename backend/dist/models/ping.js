"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Ping = new mongoose_1.Schema({
    text: String
});
const PingModel = (0, mongoose_1.model)('Service', Ping);
exports.default = PingModel;
