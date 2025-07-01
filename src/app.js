// app.js

const express = require('express');
const app = express();

// Importa as rotas do endpoint /health
const healthRoutes = require('./routes/health');
const productRoutes = require('./routes/produto.routes.js');

// Middleware para interpretar JSON nas requisições
app.use(express.json());

// Registra a rota com a base '/'
app.use('/', healthRoutes);
app.use('/api', productRoutes);

// Rota padrão para casos não tratados (404)
app.use((req, res) => {
  res.status(404).json({ error: 'Rota não encontrada' });
});

// Define a porta para o servidor
const PORT = process.env.PORT || 3000;

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

app.use((error, req, res, next) => {
  console.error('Erro:', error);
  res.status(500).json({ message: 'Internal Server Error' });
});