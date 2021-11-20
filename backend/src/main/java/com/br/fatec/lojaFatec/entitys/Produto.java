package com.br.fatec.lojaFatec.entitys;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Produto {

	

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String titulo;
	@Column(length=1500)
	private String descritivo;
	private BigDecimal valor;
	private String destaque;
	private String categoria;
	private String urlImg;

	public Produto() {
		
	}
	
	
	public Produto(String titulo, String descritivo,
				   BigDecimal valor, String destaque,
				    String categoria, String urlImg){
		this.titulo = titulo;
		this.descritivo = descritivo;
		this.valor = valor;
		this.destaque = destaque;
		this.categoria = categoria;
		this.urlImg = urlImg;
	}

	public Long getId() {
		return id;
	}
	
	public String getUrlImg() {
		return urlImg;
	}

	public String getTitulo() {
		return titulo;
	}

	public String getDescritivo() {
		return descritivo;
	}

	public BigDecimal getValor() {
		return valor;
	}

	public String getDestaque() {
		return destaque;
	}

	public String getCategoria() {
		return categoria;
	}

}
