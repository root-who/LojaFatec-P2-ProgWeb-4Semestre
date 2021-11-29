import React from "react";
import '../../assets/css/vitrine/vitrine.css'
import Produto from '../../components/produto';


function BuscaPage() {

    const [produtos, setProdutos] = React.useState([])

    function produtoNaoEncontrado(){
        if(localStorage.getItem('busca') === null){
            return (
                <div style={{margin:"3rem 0 7rem 0"}}>
                    <h1>Produto buscado "{localStorage.getItem('palavraBuscada')}" nao encontrado</h1>
                </div>
            )
        }else{
            return(
                <div style={{margin:"2rem 0 2rem 0", width: "100%", textAlign:"center"}}>
                    <h1>Produto buscado: "{localStorage.getItem('palavraBuscada')}"</h1>
                </div>
            )
        }
    }

    React.useEffect(()=>{
        if(JSON.parse(localStorage.getItem('busca')) !== null){
            setProdutos(...produtos, JSON.parse(localStorage.getItem('busca')))
        }
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



    return (
        <>
            <main className="conteudo-principal">
                {produtoNaoEncontrado()}
                { 
                        produtos.map((value, index) => {
                            return (
                                <Produto key={index} value={value}/>
                            )
                        })
                }
                
            </main>
        </>
    )
}

export default BuscaPage;