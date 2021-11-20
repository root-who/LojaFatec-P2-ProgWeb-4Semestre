import React from "react";
import {useNavigate} from 'react-router-dom'

function Produto({value}) {

    const redirect = useNavigate(); 

    function irParaDetalhes(event){
        event.preventDefault();
        localStorage.setItem('produto-detalhe', JSON.stringify(value));
        redirect("/detalheproduto");
    }


    return (
        <>
            <div className="conteudo-produto">
                <div className="card">
                    <div className="card-header alert-primary">{value.titulo}</div>
                    <div className="card-body">
                        <div className="col-7">
                            <img className="img-fluid produto-img" alt="" src={value.urlImg} />
                            <p className="card-text produto-preco">
                                R$ {value.valor}
                            </p>
                        </div>
                        <div className="col-4" style={{ display: "flex", justifyContent: "flex-end" }}>
                            <button className="btn btn-secondary btn-comprar" onClick={(event)=>{irParaDetalhes(event)}}>
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