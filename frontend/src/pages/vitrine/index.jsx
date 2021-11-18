
import '../../assets/css/vitrine/vitrine.css'

function VitrinePage(){


    return(
        <>
        <main class="conteudo-principal">
        <div class="conteudo-produto">  
            <div class="card">
                <div class="card-header alert-primary">Tenis Nike Air Max 90</div>
                <div class="card-body">
                    <div class="col-7">
                        <img class="img-fluid produto-img" alt="" src=""/>
                        <p class="card-text produto-preco">
                                R$ 799,00
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

export default VitrinePage;