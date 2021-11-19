package com.br.fatec.lojaFatec.entitys;

import java.math.BigDecimal;
import java.util.*;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Cesta {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@ManyToOne(fetch = FetchType.LAZY)
	private Cliente cliente = new Cliente();
	@OneToMany(mappedBy = "cesta", cascade = CascadeType.ALL)
	private List<ProdutosDaCesta> produtos = new ArrayList<ProdutosDaCesta>();
	private BigDecimal valorTotal;
	
	public Cesta() {
	}
	
	public void addProdutos(ProdutosDaCesta produto) {
		produto.setCesta(this);
		this.produtos.add(produto);
	}

	public Cesta(Cliente cliente, List<ProdutosDaCesta> produtos, BigDecimal valorTotal) {
		this.cliente = cliente;
		this.produtos = produtos;
		this.valorTotal = valorTotal;
	}

	public Long getId() {
		return id;
	}

	public Cliente getCliente() {
		return cliente;
	}

	public List<ProdutosDaCesta> getProdutos() {
		return produtos;
	}

	public BigDecimal getValorTotal() {
		return valorTotal;
	}
	
	
	
	
	
	
}
