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
exports.createPing = exports.getPing = void 0;
const ping_1 = __importDefault(require("../models/ping"));
const getPing = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const services = yield ping_1.default.find();
        res.status(200).json("Pong");
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.getPing = getPing;
const createPing = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const pingData = req.body;
    try {
        const ping = new ping_1.default({ pingData });
        yield ping.save();
        res.status(201).json(ping);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
    ;
});
exports.createPing = createPing;
