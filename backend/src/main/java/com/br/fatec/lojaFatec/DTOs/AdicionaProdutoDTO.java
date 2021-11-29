package com.br.fatec.lojaFatec.DTOs;

import com.br.fatec.lojaFatec.entitys.Produto;

public class AdicionaProdutoDTO {
	private Long quantidade;
	private Long idCesta;
	private Produto produto;

	public AdicionaProdutoDTO() {
	}

	public Long getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(Long quantidade) {
		this.quantidade = quantidade;
	}

	public Long getIdCesta() {
		return idCesta;
	}

	public void setIdCesta(Long id) {
		this.idCesta = id;
	}

	public Produto getProduto() {
		return produto;
	}

	public void setProduto(Produto produto) {
		this.produto = produto;
	}

}

