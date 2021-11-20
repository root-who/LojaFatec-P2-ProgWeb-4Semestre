import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import '../../assets/css/detalhe/detalhe.css'
import BotaoQuantidade from "../../components/botaoQuantidade";
import API_URL from "../../util/API/apiRequest";
function DetalheProduto() {

    const [produto, setProduto] = React.useState({
        titulo:"",
        urlImg:"",
        destaque:"",
        valor:"",
        descritivo:"",
        quantidade:1
    });

    const redirect = useNavigate(); 

    useEffect(()=>{
        if(JSON.parse(localStorage.getItem('produto-detalhe')) !== null){
            setProduto({...produto, ...JSON.parse(localStorage.getItem('produto-detalhe'))})
        }else{
            redirect("/");
        }

        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [redirect])


    function changeQuantidade(event, number){
        var currentQuantidade = produto.quantidade + (number);
        setProduto({...produto, quantidade: currentQuantidade});

    }



    function adicionarNaCesta(event){
        event.preventDefault();
        if(JSON.parse(localStorage.getItem('user'))===null){
             redirect("/login");
        }else{
            axios.request({
                method: "POST",
                url: API_URL + '/cesta/addProd',
                data:{
                    "idCesta": JSON.parse(localStorage.getItem('user')).cestaId,
                    produto : produto, 
                    "quantidade": produto.quantidade
                }
            })
        }
    }
    return (
        <>
            <main className="conteudo__principal_detalhe">
                <div className="conteudo_detalhe">
                    <div className="card">
                        <div className="card-header alert-primary">{produto.titulo}</div>
                        <div className="card-body produto__corpo">
                            <div className="col-7 produto_img">
                                <img className="img-fluid detalhe-img" alt="" src={produto.urlImg} />

                            </div>
                            <div className="col-5 produto__informacoes" style={{ display: "flex" }}>
                                <div className="informacoes__container" style={{ width: "100%" }}>
                                    <div className="destaque__preco_container">
                                        <p className="card-text produto__destaque" style={{ fontSize: "22px", fontWeight: "500" }}>
                                            {produto.destaque}
                                        </p>
                                        <p className="card-text detalhe-preco" style={{ color: "#084298" }}>
                                            R$ {produto.valor}<br></br>{"Até 10x de " + (parseFloat(produto.valor)/10).toFixed(2)}
                                        </p>
                                    </div>
                                    <p className="card-text produto__descritivo" style={{ fontSize: "16px" }}>
                                        {produto.descritivo}
                                    </p>
                                </div>
                                
                                <BotaoQuantidade onChangeValue={changeQuantidade} valor={produto.quantidade} />
                                <button className="btn btn-secondary btn-adicionar" onClick={(event)=>{adicionarNaCesta(event)}} >Adicionar a cesta</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
export default DetalheProduto;