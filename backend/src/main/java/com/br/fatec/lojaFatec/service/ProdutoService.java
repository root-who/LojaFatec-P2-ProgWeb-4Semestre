package com.br.fatec.lojaFatec.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.fatec.lojaFatec.entitys.Produto;
import com.br.fatec.lojaFatec.repository.ProdutoRepository;

@Service
public class ProdutoService {

	@Autowired
	private ProdutoRepository repository;
	
	
	public void addProduto(Produto produto){
		repository.save(produto);
	}
	
	public List<Produto> todosProdutos(){
		return repository.findAll();		
	}
	
	public List<Produto> findByTitulo(String titulo) {
		List<Produto> produtos = repository.findByTituloContainingIgnoreCase(titulo);
		return produtos;
	}
	
}
