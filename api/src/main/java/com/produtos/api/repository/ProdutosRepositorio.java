package com.produtos.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.produtos.api.model.Produto;

@Repository
public interface ProdutosRepositorio extends CrudRepository<Produto, Integer> {

    List<Produto> findAll();

    List<Produto> findByCategoria(String categoria);

    List<Produto> findByNomeContaining(String nome);

    Produto findById(int id);

    int countById(int id);

    int countByCategoria(String categoria);

}
