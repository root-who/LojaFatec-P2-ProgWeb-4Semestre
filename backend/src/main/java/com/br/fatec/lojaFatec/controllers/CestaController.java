package com.br.fatec.lojaFatec.controllers;



import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.br.fatec.lojaFatec.DTOs.AdicionaProdutoDTO;
import com.br.fatec.lojaFatec.DTOs.CestaDTO;
import com.br.fatec.lojaFatec.DTOs.ProdutosDaCestaDTO;
import com.br.fatec.lojaFatec.entitys.Cesta;
import com.br.fatec.lojaFatec.entitys.ProdutosDaCesta;
import com.br.fatec.lojaFatec.service.CestaService;

@RestController
@RequestMapping("/cesta")
public class CestaController {

	@Autowired
	private CestaService service;
	
	
	@PostMapping("/buscar")
	public ResponseEntity<CestaDTO> buscar(@RequestBody Map<String, Long> id){
		Cesta cesta = new Cesta();
		CestaDTO cestaDTO = new CestaDTO(); 
		for (var map : id.entrySet()) {
			cesta = service.findByClienteId(map.getValue());
			cestaDTO = new CestaDTO(cesta);
		}
		
		return ResponseEntity.ok(cestaDTO);
	}
	
	@PostMapping("/addProd")
	public ResponseEntity<CestaDTO> addProduto(@RequestBody AdicionaProdutoDTO addProduto){
			Cesta cesta = service.findById(addProduto.getIdCesta());
			ProdutosDaCesta prodCesta = new ProdutosDaCesta(addProduto.getQuantidade(), addProduto.getProduto());
			cesta.addProdutos(prodCesta);
			cesta.getProdutos().forEach(c ->{
				cesta.addValor(c.getValorUnitario().multiply(new BigDecimal(c.getQuantidade()))); 
			});
			service.atualizarCesta(cesta);
		
		return ResponseEntity.ok().build();
	}
	
	@PostMapping("/lista-cesta")
	public ResponseEntity<List<ProdutosDaCestaDTO>> listarCesta(@RequestBody Map<String, Long> id){
		Cesta cesta = new Cesta();
		for (var map : id.entrySet()) {
			cesta = service.findByClienteId(map.getValue());
		}
		List<ProdutosDaCestaDTO> prods = ProdutosDaCestaDTO.converterLista(cesta.getProdutos());
		return ResponseEntity.ok(prods);
	}
	
	@Transactional
	@PostMapping("/apagar-cesta")
	public void apagarProdsCesta(@RequestBody Map<String, Long> id){
		Cesta cesta = new Cesta();
		for (var map : id.entrySet()) {
			cesta = service.findByClienteId(map.getValue());
		}
		List<ProdutosDaCesta> listVazia = new ArrayList<ProdutosDaCesta>();
		cesta.setProdutos(listVazia);
		cesta.setValorTotal(BigDecimal.ZERO);
		service.deletarProdutos(cesta);
	}
	
	
	
	
}
