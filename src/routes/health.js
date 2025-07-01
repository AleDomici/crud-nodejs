// routes/health.js

const express = require('express');
const router = express.Router();

// Importa a controller
const healthController = require('../controllers/healthController');

// Cria a rota GET /health que chama a função getHealth da controller
router.get('/health', healthController.getHealth);

module.exports = router;