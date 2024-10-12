"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const character_route_1 = __importDefault(require("./character.route"));
const name_route_1 = __importDefault(require("./name.route"));
const router = (0, express_1.Router)();
// Agregar todas las rutas
router.use('/characters', character_route_1.default);
router.use('/names', name_route_1.default);
exports.default = router;
