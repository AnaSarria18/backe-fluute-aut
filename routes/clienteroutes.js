const express = require('express');
const router = express.Router();

const clienteController = require('../controller/clientecontroller');

// Ruta para registrar un nuevo cliente
router.post('/registrarse', clienteController.registrarCliente);

// Ruta para el login de clientes
router.post('/login', clienteController.loginCliente);

// Ruta para obtener todos los clientes
router.get('/clientes', clienteController.verclientes);

module.exports = router;
