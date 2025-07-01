// Controller para o cadastro e consulta de produtos
// Obs.: Em um ambiente real, utilize a biblioteca "uuid" para gerar identificadores únicos.
class ProdutoController {
  constructor() {
    // "Banco de dados" simulado: armazenando os produtos em um array
    this.produtos = [];
  }

  // Método para cadastrar um novo produto
  createProduto(req, res, next) {
    try {
      const { nome, data_criacao, quantidade_disponivel } = req.body;

      // Validação básica dos dados: todos os campos são obrigatórios
      if (!nome || !data_criacao || quantidade_disponivel == null) {
        return res.status(400).json({ message: 'Os campos "nome", "data_criacao" e "quantidade_disponivel" são obrigatórios.' });
      }

      // Criar o objeto do produto, simulando a geração de um ID (em produção, prefira utilizar a biblioteca uuid)
      const novoProduto = {
        id: Date.now().toString(),
        nome,
        data_criacao, // Formato esperado "YYYY-MM-DD"
        quantidade_disponivel,
      };

      // Adiciona o novo produto à "base de dados" simulada
      this.produtos.push(novoProduto);

      // Retorna o produto criado com status 201 (Created)
      return res.status(201).json(novoProduto);
    } catch (error) {
      next(error);
    }
  }

  // Método para buscar um produto por ID
  getProduto(req, res, next) {
    try {
      const { id } = req.params;

      // Busca o produto no Array simulando o banco de dados
      const produto = this.produtos.find((p) => p.id === id);

      // Caso o produto não seja encontrado, retorne 404
      if (!produto) {
        return res.status(404).json({ message: 'Produto não encontrado' });
      }

      // Se encontrado, retorna o produto com status 200 OK
      return res.status(200).json(produto);
    } catch (error) {
      next(error);
    }
  }
}

// Exporta-se uma instância da controller para utilização nas rotas
module.exports = new ProdutoController();