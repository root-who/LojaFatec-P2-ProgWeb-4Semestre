package com.br.fatec.lojaFatec.service;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.fatec.lojaFatec.DTOs.ErrorDTO;
import com.br.fatec.lojaFatec.entitys.Cliente;
import com.br.fatec.lojaFatec.repository.ClienteRepository;

@Service
public class ClienteService {

	@Autowired
	private ClienteRepository repository;
	
	public ErrorDTO cadastrarCliente(Cliente cliente) {
		Optional<Cliente> clienteEmailOpt = repository.findByEmail(cliente.getEmail());
		Optional<Cliente> clienteDocOpt = repository.findByDocumento(cliente.getDocumento());
		if(!clienteEmailOpt.isPresent()) {
			if(clienteDocOpt.isPresent()) {
				return new ErrorDTO("Documento informado já possui uma conta vinculada!", true);
			}else
			repository.save(cliente);
			return new ErrorDTO("Cadastro realizado com sucesso!", false);
		}
		return new ErrorDTO("Email já cadastrado, informe outro email, ou clique em esqueci a senha!", true);
	}
	
}
