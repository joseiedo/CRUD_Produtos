package com.produtos.api.services;

import java.util.List;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.produtos.api.model.Mensagem;
import com.produtos.api.model.Produto;
import com.produtos.api.repository.ProdutosRepositorio;

@Service
public class ProdutoService {

    @Autowired
    private ProdutosRepositorio action;

    @Autowired
    private Mensagem msg;

    public List<Produto> buscarProdutos() {
        return action.findAll();
    }

    public ResponseEntity<?> buscarProdutoPorId(int id) {
        if (action.countById(id) == 0) {
            msg.setMensagem("Nenhum produto foi encontrado com esse id");
            return new ResponseEntity<>(msg, HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(action.findById(id), HttpStatus.OK);
        }
    }

    public ResponseEntity<?> buscarProdutosPorCategoria(String categoria) {
        if (action.countByCategoria(categoria) == 0) {
            msg.setMensagem("Nenhum produto foi encontrado com essa categoria");
            return new ResponseEntity<>(msg, HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(action.findByCategoria(categoria), HttpStatus.OK);
        }
    }

    public ResponseEntity<?> buscarProdutosPorNome(String nome) {
        if (action.findByNomeContaining(nome).size() < 1) {
            msg.setMensagem("Nenhum produto foi encontrado com esse nome");
            return new ResponseEntity<>(msg, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(action.findByNomeContaining(nome), HttpStatus.OK);
    }

    public ResponseEntity<?> cadastro(Produto produto) {
        if (produto.getNome().equals("")) {
            msg.setMensagem("É necessário inserir um nome para o produto.");
            return new ResponseEntity<>(msg, HttpStatus.BAD_REQUEST);
        } else if (produto.getDescricao().equals("")) {
            msg.setMensagem("É necessário inserir uma descrição para o produto.");
            return new ResponseEntity<>(msg, HttpStatus.BAD_REQUEST);
        } else if (produto.getDescricao().length() >= 200) {
            msg.setMensagem("A descrição possui caracteres demais, o máximo é 200 por produto");
            return new ResponseEntity<>(msg, HttpStatus.BAD_REQUEST);
        } else if (produto.getNome().length() >= 70) {
            msg.setMensagem("O nome do produto possui caracteres demais, o máximo é 70 por produto");
            return new ResponseEntity<>(msg, HttpStatus.BAD_REQUEST);
        } else if (produto.getCategoria().equals("")) {
            msg.setMensagem("É necessário inserir uma categoria para o produto.");
            return new ResponseEntity<>(msg, HttpStatus.BAD_REQUEST);
        } else if (produto.getImagem().equals("")) {
            msg.setMensagem("É necessário inserir uma imagem para o produto.");
            return new ResponseEntity<>(msg, HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity<>(action.save(produto), HttpStatus.OK);
        }
    }

    public ResponseEntity<?> atualizar(Produto produto) {
        if (action.countById(produto.getId()) == 0) {
            msg.setMensagem("É necessário inserir um id válido.");
            return new ResponseEntity<>(msg, HttpStatus.BAD_REQUEST);
        } else if (produto.getNome().equals("")) {
            msg.setMensagem("É necessário inserir um nome para o produto.");
            return new ResponseEntity<>(msg, HttpStatus.BAD_REQUEST);
        } else if (produto.getDescricao().equals("")) {
            msg.setMensagem("É necessário inserir uma descrição para o produto.");
            return new ResponseEntity<>(msg, HttpStatus.BAD_REQUEST);
        } else if (produto.getDescricao().length() >= 200) {
            msg.setMensagem("A descrição possui caracteres demais, o máximo é 200 por produto");
            return new ResponseEntity<>(msg, HttpStatus.BAD_REQUEST);
        } else if (produto.getNome().length() >= 70) {
            msg.setMensagem("O nome do produto possui caracteres demais, o máximo é 70 por produto");
            return new ResponseEntity<>(msg, HttpStatus.BAD_REQUEST);
        } else if (produto.getCategoria().equals("")) {
            msg.setMensagem("É necessário inserir uma categoria para o produto.");
            return new ResponseEntity<>(msg, HttpStatus.BAD_REQUEST);
        } else if (produto.getImagem().equals("")) {
            msg.setMensagem("É necessário inserir uma imagem para o produto.");
            return new ResponseEntity<>(msg, HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity<>(action.save(produto), HttpStatus.OK);
        }
    }

    public ResponseEntity<?> remover(int id) {
        if (action.countById(id) == 0) {
            msg.setMensagem("Nenhum produto com este código foi encontrado");
            return new ResponseEntity<>(msg, HttpStatus.BAD_REQUEST);
        } else {
            Produto prod = action.findById(id);
            action.delete(prod);

            msg.setMensagem("Produto removido com sucesso.");
            return new ResponseEntity<>(msg, HttpStatus.OK);
        }
    }
}
