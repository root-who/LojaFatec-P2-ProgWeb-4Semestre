package com.br.fatec.lojaFatec.entitys;

import java.math.BigDecimal;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class ProdutosDaCesta {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private Long quantidade;
	private BigDecimal valorUnitario;
	@JsonIgnore
	@ManyToOne(fetch = FetchType.LAZY)
	private Cesta cesta;
	@ManyToOne
	private Produto produto;

	public ProdutosDaCesta(Long quantidade, Produto produto) {
		this.quantidade = quantidade;
		this.valorUnitario = produto.getValor();
		this.produto = produto;
	}
	
	public ProdutosDaCesta() {
	}
	
	

	public void setCesta(Cesta cesta) {
		this.cesta = cesta;
	}

	public Long getId() {
		return id;
	}

	public Long getQuantidade() {
		return quantidade;
	}

	public BigDecimal getValorUnitario() {
		return valorUnitario;
	}

	public Cesta getCesta() {
		return cesta;
	}

	public Produto getProduto() {
		return produto;
	}

	
	
}
