"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
require("express-async-errors");
var database_1 = __importDefault(require("./database"));
var routes_1 = require("./routes");
var AppError_1 = require("./errors/AppError");
database_1.default();
var app = express_1.default();
exports.app = app;
app.use(cors_1.default({ origin: '*' }));
app.use(express_1.default.json());
app.use(routes_1.router);
app.use(function (err, request, response, _next) {
    if (err instanceof AppError_1.AppError) {
        return response.status(err.statusCode).json({
            message: err.message,
        });
    }
    return response.status(500).json({
        status: "Error",
        message: "Internal server error " + err.message,
    });
});
