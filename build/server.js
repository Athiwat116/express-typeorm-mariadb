"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const AppRoute_1 = __importDefault(require("./routes/AppRoute"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const host = String(process.env.HOST);
const port = Number(process.env.PORT);
// route ===AppRoute.ts===
app.use(AppRoute_1.default);
app.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`);
});
