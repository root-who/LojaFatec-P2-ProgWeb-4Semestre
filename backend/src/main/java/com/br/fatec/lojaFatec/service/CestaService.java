package com.br.fatec.lojaFatec.service;


import java.beans.Transient;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.fatec.lojaFatec.entitys.Cesta;
import com.br.fatec.lojaFatec.repository.CestaRepository;
import com.br.fatec.lojaFatec.repository.ProdutoDaCestaRepository;

@Service
public class CestaService {

	@Autowired
	private CestaRepository repository;
	
	@Autowired
	private ProdutoDaCestaRepository prodDaCestaRepository;
	
	public Cesta findByClienteId(Long id) {
		return repository.findByClienteId(id);
	}
	
	public Cesta findById(Long id) {
		return  repository.findById(id).get();
	}
	
	public void atualizarCesta(Cesta cesta) {
		
		repository.save(cesta);
	}
	
	@Transient
	public void deletarProdutos(Cesta cesta) {
		prodDaCestaRepository.deletarProdutos(cesta);
	}
	
}
