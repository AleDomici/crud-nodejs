// controllers/healthController.js

// Função que retorna o status da aplicação
exports.getHealth = (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'Aplicação saudável!'
  });
};