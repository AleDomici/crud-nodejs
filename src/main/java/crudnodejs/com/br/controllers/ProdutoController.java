package crudnodejs.com.br.controllers;

import crudnodejs.com.br.dtos.ProdutoDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import crudnodejs.com.br.services.ProdutoService;

@RestController
@RequestMapping("/api/produtos")
public class ProdutoController {

    @Autowired
    private ProdutoService produtoService;

    // Rota POST para cadastro de produto
    @PostMapping
    public ResponseEntity<ProdutoDTO> createProduto(@RequestBody ProdutoDTO produtoDTO) {
        ProdutoDTO created = produtoService.createProduto(produtoDTO);
        return ResponseEntity.status(201).body(created);
    }

    // Rota GET para buscar um produto específico pelo ID
    @GetMapping("/{id}")
    public ResponseEntity<ProdutoDTO> getProduto(@PathVariable Long id) {
        ProdutoDTO produto = produtoService.getProduto(id);
        if (produto != null) {
            return ResponseEntity.ok(produto);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}