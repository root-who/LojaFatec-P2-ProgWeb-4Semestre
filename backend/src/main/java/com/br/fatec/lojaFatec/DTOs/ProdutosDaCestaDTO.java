package com.br.fatec.lojaFatec.DTOs;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import com.br.fatec.lojaFatec.entitys.ProdutosDaCesta;

public class ProdutosDaCestaDTO {

	private Long quantidade;
	private BigDecimal valor;
	private String titulo;
	
	
	public ProdutosDaCestaDTO(ProdutosDaCesta cesta) {
		this.quantidade = cesta.getQuantidade();
		this.valor = cesta.getValorUnitario();
		this.titulo = cesta.getProduto().getTitulo();
	}
	
	public static List<ProdutosDaCestaDTO> converterLista(List<ProdutosDaCesta> produts){
		return produts.stream().map(ProdutosDaCestaDTO::new).collect(Collectors.toList());
	}

	public Long getQuantidade() {
		return quantidade;
	}

	public BigDecimal getValorUnitario() {
		return valor;
	}

	public String getTitulo() {
		return titulo;
	}
	
	
	

}
