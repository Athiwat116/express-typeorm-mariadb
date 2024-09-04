"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AppRoute = express_1.default.Router();
AppRoute.get("/", (req, res) => {
    return res.status(200).json({ message: "Hello!" });
});
AppRoute.get("*", (req, res) => {
    return res.status(404).json({ message: "Page not found!" });
});
exports.default = AppRoute;
