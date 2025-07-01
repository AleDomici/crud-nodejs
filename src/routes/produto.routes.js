const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produto.controller');

// Rota POST para cadastro de produto (endpoint: /api/produtos)
router.post('/produtos', (req, res, next) => {
  produtoController.createProduto(req, res, next);
});

// Rota GET para buscar um produto específico pelo ID (endpoint: /api/produtos/:id)
router.get('/produtos/:id', (req, res, next) => {
  produtoController.getProduto(req, res, next);
});

module.exports = router;