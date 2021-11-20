package com.br.fatec.lojaFatec.service;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.fatec.lojaFatec.DTOs.ClienteLoginDTO;
import com.br.fatec.lojaFatec.DTOs.ErrorDTO;
import com.br.fatec.lojaFatec.entitys.Cesta;
import com.br.fatec.lojaFatec.entitys.Cliente;
import com.br.fatec.lojaFatec.repository.CestaRepository;
import com.br.fatec.lojaFatec.repository.ClienteRepository;

@Service
public class ClienteService {

	@Autowired
	private ClienteRepository repository;
	
	@Autowired
	private CestaRepository cestaRepository;
	
	public ErrorDTO cadastrarCliente(Cliente cliente) {
		Optional<Cliente> clienteEmailOpt = repository.findByEmail(cliente.getEmail());
		Optional<Cliente> clienteDocOpt = repository.findByDocumento(cliente.getDocumento());
		if(!clienteEmailOpt.isPresent()) {
			if(clienteDocOpt.isPresent()) {
				return new ErrorDTO("Documento informado já possui uma conta vinculada!", true);
			}else
			repository.save(cliente);
			Cesta cesta = new Cesta(cliente);
			cestaRepository.save(cesta);
			return new ErrorDTO("Cadastro realizado com sucesso!", false);
		}
		return new ErrorDTO("Email já cadastrado, informe outro email, ou clique em esqueci a senha!", true);
	}
	
	public ClienteLoginDTO autenticaCliente(Cliente cliente) {
		ClienteLoginDTO clienteLogin  = new ClienteLoginDTO();
		Optional<Cliente> clienteEmailOpt = repository.findByEmail(cliente.getEmail());
		if(clienteEmailOpt.isPresent()) {
			if(cliente.getSenha().compareTo(clienteEmailOpt.get().getSenha()) ==0 ) {
				Cliente clienteLogado = new Cliente(clienteEmailOpt.get().getId(), clienteEmailOpt.get().getNome());
				Cesta cesta = cestaRepository.findByClienteId(clienteEmailOpt.get().getId());
				clienteLogin.setCestaId(cesta.getId());
				clienteLogin.setCliente(clienteLogado);
				clienteLogin.setErro(new ErrorDTO("Login efetuado com sucesso!", false));
				return clienteLogin;
			}else 
				clienteLogin.setErro(new ErrorDTO("Senha incorreta!", true));
				return clienteLogin;
		}
		clienteLogin.setErro(new ErrorDTO("Email não existente, tente novamente, ou cadastre-se!", true));
		return clienteLogin;
	}
	
}
