package com.br.fatec.lojaFatec.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.br.fatec.lojaFatec.entitys.Cesta;

@Repository
public interface CestaRepository extends JpaRepository<Cesta, Long>{

	Cesta findByClienteId(Long id);

	
	
}
