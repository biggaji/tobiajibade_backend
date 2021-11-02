"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.APP = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
if (process.env.NODE_ENV !== 'production') {
    dotenv_1.default.config();
}
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./router/routes"));
const APP = (0, express_1.default)();
exports.APP = APP;
APP.use(express_1.default.urlencoded({ extended: false }));
APP.use(express_1.default.json());
APP.use((0, cors_1.default)());
APP.use("/control", routes_1.default);
const PORT = process.env.PORT || 43002;
// 404 endpoint 
APP.use((req, res, next) => {
    res.status(404).json({
        "statusCode": 404,
        "path": req.path,
        "message": "Invalid api endpoint",
    });
});
APP.listen(PORT, () => {
    console.log(`API running on ${PORT}`);
});
