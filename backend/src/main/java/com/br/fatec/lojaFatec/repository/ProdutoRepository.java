package com.br.fatec.lojaFatec.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.br.fatec.lojaFatec.entitys.Produto;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long>{


	List<Produto> findByTituloContainingIgnoreCase(String titulo);
}
