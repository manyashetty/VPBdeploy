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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// require('dotenv').config();
const SECRET_KEY = process.env.SECRET_KEY;
const REFRESH_SECRET_KEY = process.env.REFRESH_SECRET_KEY;
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
app.post('/refresh-token', (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
        return res.status(401).json({ error: 'Refresh token missing' });
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(refreshToken, REFRESH_SECRET_KEY);
        const payload = { userId: decoded.userId };
        const newAccessToken = jsonwebtoken_1.default.sign(payload, SECRET_KEY, { expiresIn: '15m' });
        res.status(200).json({ accessToken: newAccessToken });
    }
    catch (error) {
        return res.status(401).json({ error: 'Invalid refresh token' });
    }
});
app.use('/projects', auth_middleware_2.authenticateJWT, service_routes_1.default);
app.use('/auth', auth_middleware_1.default);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
