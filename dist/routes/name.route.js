"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const name_1 = require("../controllers/name");
const router = (0, express_1.Router)();
// Define las rutas y conecta con los métodos del controlador
router.get('/', name_1.handler.getName);
// router.get('/:id', userController.getUserById);
// router.post('/', userController.createUser);
// router.put('/:id', userController.updateUser);
// router.delete('/:id', userController.deleteUser);
exports.default = router;
