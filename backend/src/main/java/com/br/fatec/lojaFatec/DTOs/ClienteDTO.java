package com.br.fatec.lojaFatec.DTOs;

import com.br.fatec.lojaFatec.entitys.Cliente;

public class ClienteDTO {
	
	private String nome;
	private String email;
	private Long id;


	
	
	public ClienteDTO(Cliente cliente) {
		this.nome = cliente.getNome();
		this.email = cliente.getEmail();
		this.id = cliente.getId();
	}



	public String getNome() {
		return nome;
	}
	public String getEmail() {
		return email;
	}
	public Long getId() {
		return id;
	}
	
}
