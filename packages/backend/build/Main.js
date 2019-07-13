"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 8080;
const hey = "Hello from backend";
const whiteListDomains = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
};
app.use(whiteListDomains);
app.get("/hey", (req, res) => res.json({ hey }).send());
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
//# sourceMappingURL=Main.js.map