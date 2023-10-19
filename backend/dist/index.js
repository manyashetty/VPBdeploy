"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const service_routes_1 = __importDefault(require("./routes/service.routes"));
const auth_middleware_1 = __importDefault(require("./routes/auth.middleware"));
const user_controller_1 = require("./controllers/user.controller");
const auth_middleware_2 = require("./routes/auth.middleware");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
mongoose_1.default.connect('mongodb+srv://manu12shetty:tara12shetty@cluster0.6qcysms.mongodb.net/test')
    .then(() => {
    console.log('Connected to MongoDB');
})
    .catch((error) => {
    console.error('MongoDB connection error:', error);
});
app.use('/api', service_routes_1.default);
app.post('/register', user_controller_1.registerUser);
app.post('/login', user_controller_1.loginUser);
app.get('/protected', auth_middleware_2.authenticateJWT, (req, res) => {
    res.json({ message: 'Protected route' });
});
app.use('/projects', auth_middleware_2.authenticateJWT, service_routes_1.default);
app.use('/auth', auth_middleware_1.default);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
