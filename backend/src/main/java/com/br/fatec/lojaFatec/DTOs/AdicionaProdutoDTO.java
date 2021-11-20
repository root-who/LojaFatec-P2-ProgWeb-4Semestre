package com.br.fatec.lojaFatec.DTOs;

import com.br.fatec.lojaFatec.entitys.Produto;

public class AdicionaProdutoDTO {

	private Long idCesta;
	private Produto produto;
	private Long quantidade;
	
	

	public Long getIdCesta() {
		return idCesta;
	}

	public Produto getProduto() {
		return produto;
	}

	public Long getQuantidade() {
		return quantidade;
	}

}
