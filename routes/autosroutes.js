const express = require('express');
const router = express.Router();

const autoController = require('../controller/autoscontroller');

// Ruta para obtener autos disponibles
router.get('/auticos', autoController.autosDisponibles);

// Ruta para registrar un nuevo auto
router.post('/auto', autoController.registrarAuto);

module.exports = router;
