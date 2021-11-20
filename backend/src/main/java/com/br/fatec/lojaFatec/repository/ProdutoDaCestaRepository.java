package com.br.fatec.lojaFatec.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.br.fatec.lojaFatec.entitys.Cesta;
import com.br.fatec.lojaFatec.entitys.ProdutosDaCesta;

@Repository
public interface ProdutoDaCestaRepository extends JpaRepository<ProdutosDaCesta, Long>{

	@Modifying
	@Query("DELETE FROM ProdutosDaCesta p WHERE p.cesta=:cesta")
	void deletarProdutos(@Param("cesta") Cesta cesta);
}
