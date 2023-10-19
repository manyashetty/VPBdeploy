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
exports.deleteProject = exports.updateProject = exports.createProject = exports.getProject = void 0;
const project_model_js_1 = __importDefault(require("../models/project.model.js"));
const getProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const project = yield project_model_js_1.default.find();
        res.status(200).json(project);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.getProject = getProject;
const createProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    const { title, description, image_url } = req.body;
    if (!user || !user._id) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    if (!title || !description || !image_url) {
        return res.status(400).json({ error: 'Title ,description and image_url are required' });
    }
    try {
        const project = new project_model_js_1.default({ title, description, image_url, user: user._id });
        if (user) {
            project.user = user;
        }
        yield project.save();
        res.status(201).json(project);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.createProject = createProject;
const updateProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const projectId = req.params.id;
        const { title, description, image_url } = req.body;
        // Check if the service exists
        const existingProject = yield project_model_js_1.default.findById(projectId);
        if (!existingProject) {
            return res.status(404).json({ error: 'Project not found' });
        }
        // Update the service
        if (title) {
            existingProject.title = title;
        }
        if (description) {
            existingProject.description = description;
        }
        if (image_url) {
            existingProject.image_url = image_url;
        }
        // Save the updated service
        const updatedProject = yield existingProject.save();
        res.status(200).json(updatedProject);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.updateProject = updateProject;
const deleteProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const projectId = req.params.id;
        // Check if the service exists
        const existingProject = yield project_model_js_1.default.findById(projectId);
        if (!existingProject) {
            return res.status(404).json({ error: 'Project not found' });
        }
        // Delete the service using deleteOne
        yield project_model_js_1.default.deleteOne({ _id: projectId });
        res.status(204).json({ message: "Projectdeleted" }); // deleted
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.deleteProject = deleteProject;
