package com.br.fatec.lojaFatec.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.br.fatec.lojaFatec.entitys.ProdutosDaCesta;

@Repository
public interface ProdutoDaCestaRepository extends JpaRepository<ProdutosDaCesta, Long>{

}
