package com.br.fatec.lojaFatec.DTOs;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import com.br.fatec.lojaFatec.entitys.Cesta;
import com.br.fatec.lojaFatec.entitys.ProdutosDaCesta;

public class CestaDTO {

	private Long id;
	private ClienteDTO cliente;
	private List<ProdutosDaCesta> produtos = new ArrayList<ProdutosDaCesta>();
	private BigDecimal valorTotal = BigDecimal.ZERO;;
	
	
	public CestaDTO() {
		// TODO Auto-generated constructor stub
	}
	
	public CestaDTO(Cesta cesta) {
		this.id = cesta.getId();
		this.cliente = new ClienteDTO(cesta.getCliente());
		this.produtos = cesta.getProdutos();
		this.valorTotal = cesta.getValorTotal();
	}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public ClienteDTO getCliente() {
		return cliente;
	}

	public void setCliente(ClienteDTO cliente) {
		this.cliente = cliente;
	}

	public List<ProdutosDaCesta> getProdutos() {
		return produtos;
	}

	public void setProdutos(List<ProdutosDaCesta> produtos) {
		this.produtos = produtos;
	}

	public BigDecimal getValorTotal() {
		return valorTotal;
	}

	public void setValorTotal(BigDecimal valorTotal) {
		this.valorTotal = valorTotal;
	}

}
