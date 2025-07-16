// src/main/java/crudnodejs.com.br.controllers/ProdutoService.java
package crudnodejs.com.br.services;

import crudnodejs.com.br.dtos.ProdutoDTO;
import org.springframework.stereotype.Service;

@Service
public class ProdutoService {
    public ProdutoDTO createProduto(ProdutoDTO produtoDTO) {
        // Lógica de persistência aqui (mock para exemplo)
        produtoDTO.setId(1L); // Simula ID gerado
        return produtoDTO;
    }

    public ProdutoDTO getProduto(Long id) {
        // Lógica de busca aqui (mock para exemplo)
        if (id == 1L) {
            ProdutoDTO produto = new ProdutoDTO();
            produto.setId(1L);
            produto.setNome("Produto Exemplo");
            return produto;
        }
        return null;
    }
}