package com.br.fatec.lojaFatec.controllers;


import java.math.BigDecimal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.br.fatec.lojaFatec.DTOs.BuscaProdutoDTO;
import com.br.fatec.lojaFatec.entitys.Produto;
import com.br.fatec.lojaFatec.service.ProdutoService;

@RestController
@RequestMapping("/produtos")
public class ProdutoController {

	
	@Autowired
	private ProdutoService service;
	
	@GetMapping("/todos")
	public ResponseEntity<List<Produto>> listarTodos(){
		return ResponseEntity.ok(service.todosProdutos());
	}
	
	@PostMapping("/busca-pelo-titulo")
	public ResponseEntity<List<Produto>> buscaPeloTitulo(@RequestBody BuscaProdutoDTO produto){
		if(produto.getTitulo().isBlank() || produto.getTitulo().isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		List<Produto> produtos = service.findByTitulo(produto.getTitulo());
		if(produtos.isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		produtos.forEach(c-> System.out.println(c.getTitulo()));
		return ResponseEntity.ok(produtos);
	}
	
	@GetMapping("/adicionar")
	public ResponseEntity<?> adicionarProduto(){
		
		Produto produto1 = new Produto("TÊNIS NIKE AIR MAX 97 MASCULINO",
				"Um tênis lendário com elementos arrojados.A marca do Swoosh não há de se negar, acumula ao longo de décadas muitas cartadas de sucesso dentro e fora do “âmbito esportivo”, e uma dessas com toda certeza inclui a linha Air Max.",
				new BigDecimal("675.00"),
				"Solado com Waffle para gerar mais aderência",
				"CALÇADOS",
				"https://authenticfeet.vteximg.com.br/arquivos/ids/236993-600-600/Tenis-Nike-Air-Max-97-Masculino-Multicolor.jpg"
				);
		
		Produto produto2 = new Produto("Tênis Nike Air Max Infinity 2",
				"Estilo esportivo renovado com o Tênis Nike Air Max Infinity 2 Feminino! O cabedal em sintético fornece resistência e durabilidade, enquanto a entressola com a tecnologia Air Max apresenta amortecimento suave durante o dia a dia. O design esportivo dá o diferencial da peça.",
				new BigDecimal("550.00"),
				"Bolsa de ar que garante uma excelente absorção de impactos.",
				"CALÇADOS",
				"https://static.netshoes.com.br/produtos/tenis-nike-air-max-infinity-2-feminino/26/HZM-5152-026/HZM-5152-026_zoom1.jpg");
		Produto produto3 = new Produto("TÊNIS SUPERSTAR SLIP-ON",
				"O adidas Superstar sabe tudo sobre evolução. Ele estreou nas quadras, depois dominou os palcos e inundou as ruas em uma completa revolução cultural.",
				new BigDecimal("350.00"),
				"A versão sem cardarços do lendário ADIDAS SUPERSTAR",
				"CALÇADOS",
				"https://assets.adidas.com/images/w_600,f_auto,q_auto/130374c86dd443eaacf7ac2500f67d73_9366/Tenis_Superstar_Slip-On_Multi_EX4623.jpg");
		Produto produto4 = new Produto("TÊNIS SUPERSTAR",
				"Criado originalmente para as quadras de basquete nos anos 70. Celebrado pelas lendas do hip hop da década de 80.",
				new BigDecimal("450.00"),
				"Para pés mais finos, recomendamos que compre um tamanho menor do que o de costume.",
				"CALÇADOS",
				"https://assets.adidas.com/images/w_600,f_auto,q_auto/ff2e419f1eda4ebab23faad6009a3a9e_9366/Tenis_Superstar_Branco_EG4958.jpg");
		Produto produto5 = new Produto("Tênis Jordan Delta 2",
				" O modelo 2 ainda conta com a combinação surpreendente de materiais futurísticos para sustentação, com muitas texturas diferentes e costuras densas para criar um look aventureiro e icônico.",
				new BigDecimal("1150.00"),
				"O Jordan Delta 2 oferece uma nova e destemida versão das caraterísticas que você deseja: durabilidade, conforto e a atitude Jordan.",
				"CALÇADOS",
				"https://images.lojanike.com.br/500x500/produto/tenis-jordan-delta-2-masculino-CV8121-004-1.jpg");
		
		
		Produto produto6 = new Produto("Camiseta FC Barcelona",
				"A camiseta FC Barcelona proporciona a você o mesmo look dos seus craques favoritos. O tecido antissuor é leve e ventilado para manter você fresco enquanto se aquece para o jogo.",
				new BigDecimal("240.00"),
				"A tecnologia Nike Dri-FIT absorve o suor para proporcionar uma evaporação mais rápida, ajudando você a manter seu corpo seco e confortável.",
				"VESTUARIO",
				"https://images.lojanike.com.br/500x500/produto/camisa-aquecimento-barcelona-champions-l-DB7623-015-3-31632235634.jpg");
		Produto produto7 = new Produto("Camiseta Nike SB",
				"Fabricada com algodão macio e solto, a camiseta Nike SB é uma peça essencial para o dia a dia que se destaca graças ao desenho em forma de cone.",
				new BigDecimal("130.00"),
				"Caimento solto para uma sensação espaçosa",
				"VESTUARIO",
				"https://images.lojanike.com.br/500x500/produto/camiseta-manga-curta-m-nk-sb-tee-coney-DJ1224-469-3-31621543030.jpg");
		Produto produto8 = new Produto("Camisa Nike Corinthians I 2020/21",
				"Inspirada na clássica camisa do título de 90, o novo manto do Corinthians faz homenagem aos loucos que, dentro e fora de campo, mostraram que nossa loucura não para.",
				new BigDecimal("250.00"),
				"Tecnologia Dri-FIT ajuda a manter você seco e confortável.",
				"VESTUARIO",
				"https://images.lojanike.com.br/500x500/produto/camisa-nike-corinthians-i-202021-torcedor-pro-masculina-CD4250-100-1-11626441466.jpg");
		Produto produto9 = new Produto("Camisa Bayern de Munique Home 20/21",
				"Vista as cores que dominam o futebol alemão com a nova Camisa do Bayern de Munique Home 20/21 s/nº Torcedor Adidas! Moderna e trazendo peso de sobra, a camisa titular do Bayern chega com o belo tom de vermelho como principal e as TrêsListras percorrendo as laterais esbanjando muito estilo Adidas de torcer.",
				new BigDecimal("250.00"),
				"Tecnologia Dri-FIT ajuda a manter você seco e confortável.",
				"VESTUARIO",
				"https://static.netshoes.com.br/produtos/camisa-bayern-de-munique-home-2021-sn-torcedor-adidas-masculina/56/NQQ-4343-056/NQQ-4343-056_zoom1.jpg");
		Produto produto10 = new Produto("CAMISETA BOYFRIEND TREFOIL",
				"Esta camiseta coloca o logo adidas Trefoil na frente e no centro para celebrar o seu legado. O formato extralargo cria uma modelagem casual que veste confortavelmente.",
				new BigDecimal("100.00"),
				"UMA CAMISETA OVERSIZE QUE DEMONSTRA O ORGULHO ADIDAS",
				"VESTUARIO",
				"https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/ef60672933c6475689e3a9b400b1c459_9366/Camiseta_Boyfriend_Trefoil_Branco_DX2322_01_laydown.jpg");
		Produto produto11 = new Produto("CHAPÉU BUCKET",
				"Quer mostrar seu lado glamouroso? Essa é fácil. Todos os seus lados são arrebatadores com este chapéu Bucket adidas.",
				new BigDecimal("230.00"),
				"Bordados em 3D dourados acrescentam um toque de glam aos logos clássicos adidas.",
				"ACESSORIOS",
				"https://assets.adidas.com/images/w_600,f_auto,q_auto/0c0f06879b6045998c29ad24001f9469_9366/Chapeu_Bucket_Preto_H09036.jpg");
		Produto produto12 = new Produto("MOCHILA HER STUDIO LONDON",
				"Mesmo que você esteja na cidade, a estampa brilhante nesta mochila da adidas e do HER Studio London faz você lembrar de relaxar, reabastecer as energias e aproveitar o dia.",
				new BigDecimal("140.00"),
				"PRODUZIDA EM PARCERIA COM O HER STUDIO LONDON",
				"ACESSORIOS",
				"https://assets.adidas.com/images/w_600,f_auto,q_auto/b58e58c1165c4b358550ac89009ef8ff_9366/Mochila_HER_Studio_London_Multicores_GN2131.jpg");
		Produto produto13 = new Produto("Luvas Nike Goalkeeper",
				"As luvas Nike Goalkeeper Match estão prontas para defender seu jogo. ",
				new BigDecimal("200.00"),
				"A espuma na palma da mão proporciona amortecimento macio e absorção de impactos.",
				"ACESSORIOS",
				"https://images.lojanike.com.br/860x860/produto/luvas-nk-gk-match-fa20-CQ7799-501-2-21628866870.jpg");
		Produto produto14 = new Produto("Bola Nike Premier League Strike",
				"A bola de futebol Premier League Strike está pronta para voar para o fundo da rede.",
				new BigDecimal("190.00"),
				"O revestimento texturizado oferece excelente toque e conforto no pé.",
				"ACESSORIOS",
				"https://images.lojanike.com.br/860x860/produto/bola-nike-premier-league-strike-DC2210-710-2-21635943017.jpg");
		Produto produto15 = new Produto("Meia Nike Everyday Crew",
				"Potencialize seu jogo com as meias de treino Nike Everyday amortecidas.",
				new BigDecimal("40.00"),
				"A tecnologia Dri-FIT ajuda a manter seus pés secos e confortáveis",
				"ACESSORIOS",
				"https://images.lojanike.com.br/860x860/produto/meia-nike-everyday-crew-DA2123-010-1.jpg");
		Produto produto16 = new Produto("Jaqueta Nike x Furia eSports 2021/22",
				"A nova Jaqueta Nike x Furia eSports 2021/22 celebra a parceria com a Nike. Criada de fã para fã, a FURIA Esports foi fundada no Brasil.",
				new BigDecimal("350.00"),
				"Forro que repele a água para ajudar a manter você seco em garoas.",
				"VESTUARIOS",
				"https://images.lojanike.com.br/500x500/produto/jaqueta-nike-x-furia-esports-202122-BV6881-010-1.jpg");

		
		service.addProduto(produto1);
		service.addProduto(produto2);
		service.addProduto(produto3);
		service.addProduto(produto4);
		service.addProduto(produto5);
		service.addProduto(produto6);
		service.addProduto(produto7);
		service.addProduto(produto8);
		service.addProduto(produto9);
		service.addProduto(produto10);
		service.addProduto(produto11);
		service.addProduto(produto12);
		service.addProduto(produto13);
		service.addProduto(produto14);
		service.addProduto(produto15);
		service.addProduto(produto16);
		
		
		
		return ResponseEntity.ok().build();
	}
}
