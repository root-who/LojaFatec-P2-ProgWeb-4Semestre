import React from "react";
import '../../assets/css/detalhe/detalhe.css'
function DetalheProduto() {

    const [value] = React.useState(JSON.parse(localStorage.getItem('produto-detalhe')))
    return (
        <>
            <main class="conteudo__principal_detalhe">
                <div class="conteudo_detalhe">
                    <div class="card">
                        <div class="card-header alert-primary">{value.titulo}</div>
                        <div class="card-body produto__corpo">
                            <div class="col-7 produto_img">
                                <img class="img-fluid detalhe-img" alt="" src={value.urlImg} />

                            </div>
                            <div class="col-5 produto__informacoes" style={{ display: "flex" }}>
                                <div className="informacoes__container" style={{ width: "100%" }}>
                                    <div className="destaque__preco_container">
                                        <p class="card-text produto__destaque" style={{ fontSize: "22px", fontWeight: "500" }}>
                                            {value.destaque}
                                        </p>
                                        <p class="card-text detalhe-preco" style={{ color: "#084298" }}>
                                            R$ {value.valor}<br></br>{"Até 10x de " + (parseFloat(value.valor)/10).toFixed(2)}
                                        </p>
                                    </div>
                                    <p class="card-text produto__descritivo" style={{ fontSize: "16px" }}>
                                        {value.descritivo}
                                    </p>


                                </div>
                                <button class="btn btn-secondary btn-adicionar" >Adicionar a cesta</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
export default DetalheProduto;