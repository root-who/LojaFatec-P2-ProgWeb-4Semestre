package com.br.fatec.lojaFatec.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.br.fatec.lojaFatec.entitys.Produto;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long>{

}
