import '../../assets/css/vitrine/vitrine.css'
function DetalheProduto() {
    return (
        <>
            <main class="conteudo-principal">
                <div class="conteudo-produto">
                    <div class="card">
                        <div class="card-header alert-primary">Tenis Nike Air Max 90</div>
                        <div class="card-body">
                            <div class="col-7">
                                <img class="img-fluid produto-img" alt="" src="../assets/img/produtos/airMax90.jpg"/>
                                <p class ="card-text produto-preco">
                                R$ 799,00
                                </p>
                                <p class ="card-text">
                                Tenis edição limitada
                                </p>
                                <p class ="card-text">
                                Nada tão legal, nada tão confortável, nada tão comprovado.O Nike Air Max 90 permanece fiel às suas raízes de corrida do OG, com a emblemática sola Waffle, sobreposições costuradas e detalhes clássicos em TPU.As cores clássicas celebram seu visual renovado, enquanto o amortecimento Max Air aumenta o conforto da viagem.
                                </p>
                                <p class ="card-text">
                                Tamanhos Disponiveis: 37, 38, 40, 42.
                                </p>
                            </div>
                            <div class="col-4">
                                <button class="btn btn-secondary btn-comprar">Comprar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
export default DetalheProduto;