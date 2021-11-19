import React from "react";
import {useNavigate} from 'react-router-dom'

function Produto({value}) {

    const redirect = useNavigate(); 

    function irParaDetalhes(event){
        event.preventDefault();
        localStorage.setItem('produto-detalhe', JSON.stringify(value));
        redirect("/detalheproduto")
    }


    return (
        <>
            <div class="conteudo-produto">
                <div class="card">
                    <div class="card-header alert-primary">{value.titulo}</div>
                    <div class="card-body">
                        <div class="col-7">
                            <img class="img-fluid produto-img" alt="" src={value.urlImg} />
                            <p class="card-text produto-preco">
                                R$ {value.valor}
                            </p>
                        </div>
                        <div class="col-4" style={{ display: "flex", justifyContent: "flex-end" }}>
                            <button class="btn btn-secondary btn-comprar" onClick={(event)=>{irParaDetalhes(event)}}>
                                Detalhes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Produto;