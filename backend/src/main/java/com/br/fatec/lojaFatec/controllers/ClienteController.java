package com.br.fatec.lojaFatec.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.br.fatec.lojaFatec.DTOs.ClienteLoginDTO;
import com.br.fatec.lojaFatec.DTOs.ErrorDTO;
import com.br.fatec.lojaFatec.entitys.Cliente;
import com.br.fatec.lojaFatec.service.ClienteService;

@RestController
@RequestMapping("cliente")
public class ClienteController {
	
	@Autowired
	private ClienteService service;
	
	@PostMapping("/cadastro")
	public ResponseEntity<ErrorDTO> cadastrarCliente(@RequestBody Cliente cliente){
		ErrorDTO erro  = service.cadastrarCliente(cliente);
		return ResponseEntity.ok(erro);
	}
	
	@PostMapping("/login")
	public ResponseEntity<ClienteLoginDTO> autenticar(@RequestBody Cliente cliente){
		ClienteLoginDTO clienteLog  = service.autenticaCliente(cliente);
		return ResponseEntity.ok(clienteLog);
	}
	
	

	
}
