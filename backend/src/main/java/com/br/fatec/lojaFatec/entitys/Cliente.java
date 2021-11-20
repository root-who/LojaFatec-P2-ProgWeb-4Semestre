package com.br.fatec.lojaFatec.entitys;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Cliente {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String nome;
	private String email;
	private String senha;
	private String documento;
	private String telefone;

	

	public Cliente() {

	}

	public Cliente(Long id, String nome) {
		this.nome = nome;
		this.id = id;
	}

	public Cliente(String nome, String email, String senha, String documento, String telefone) {
		this.nome = nome;
		this.email = email;
		this.senha = senha;
		this.documento = documento;
		this.telefone = telefone;
	}

	public Long getId() {
		return id;
	}

	public String getNome() {
		return nome;
	}

	public String getEmail() {
		return email;
	}

	public String getSenha() {
		return senha;
	}

	public String getDocumento() {
		return documento;
	}

	public String getTelefone() {
		return telefone;
	}

}
