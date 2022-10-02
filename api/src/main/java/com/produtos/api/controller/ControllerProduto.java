package com.produtos.api.controller;

import java.util.List;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.produtos.api.model.Produto;
import com.produtos.api.repository.ProdutosRepositorio;
import com.produtos.api.services.ProdutoService;

@CrossOrigin
@RestController
public class ControllerProduto {

    /**
     * END POINTS
     * 
     * GET
     * localhost:8080/produtos
     * localhost:8080/produtos/{nome}
     * localhost:8080/produtos/produto/{id}
     * localhost:8080/produtos/categoria/{categoria}
     * 
     * POST
     * localhost:8080/produtos/cadastrar
     * 
     * PUT
     * localhost:8080/produtos/atualizar
     * 
     * DELETE
     * localhost:8080/produtos/remover
     */

    @Autowired
    private ProdutosRepositorio action;

    @Autowired
    private ProdutoService service;

    @GetMapping("produtos")
    public List<Produto> puxarProdutos() {
        return service.buscarProdutos();
    }

    @GetMapping("produtos/produto/{id}")
    public ResponseEntity<?> puxarProdutosPorid(@PathVariable int id) {
        return service.buscarProdutoPorId(id);
    }

    @GetMapping("produtos/categoria/{categoria}")
    public ResponseEntity<?> puxarProdutosPorCategoria(@PathVariable String categoria) {
        return service.buscarProdutosPorCategoria(categoria);
    }

    @GetMapping("produtos/{nome}")
    public ResponseEntity<?> puxarProdutosPorNome(@PathVariable String nome) {
        return service.buscarProdutosPorNome(nome);
    }

    @PostMapping("/cadastro")
    public ResponseEntity<?> cadastrar(@RequestBody Produto prod) {
        return service.cadastro(prod);
    }

    @PutMapping("/produtos/atualizar")
    public ResponseEntity<?> atualizar(@RequestBody Produto prod) {
        return service.atualizar(prod);
    }

    @DeleteMapping("/produtos/remover/{codigo}")
    public ResponseEntity<?> remover(@PathVariable int codigo) {
        return service.remover(codigo);
    }
}
