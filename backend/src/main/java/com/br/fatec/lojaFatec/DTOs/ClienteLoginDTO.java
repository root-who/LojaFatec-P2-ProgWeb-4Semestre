package com.br.fatec.lojaFatec.DTOs;

import com.br.fatec.lojaFatec.entitys.Cliente;

public class ClienteLoginDTO {
	
	private Cliente cliente;
	private ErrorDTO erro;
	private Long cestaId;

	public ClienteLoginDTO() {
	}
	
	
	
	
	public Long getCestaId() {
		return cestaId;
	}

	public void setCestaId(Long cestaId) {
		this.cestaId = cestaId;
	}




	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}



	public void setErro(ErrorDTO erro) {
		this.erro = erro;
	}



	public ClienteLoginDTO(Cliente cliente, ErrorDTO erro) {
		this.cliente = cliente;
		this.erro = erro;
	}



	public Cliente getCliente() {
		return cliente;
	}

	public ErrorDTO getErro() {
		return erro;
	}
}
