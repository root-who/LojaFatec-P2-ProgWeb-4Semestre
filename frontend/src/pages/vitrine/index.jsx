import axios from "axios";
import React from "react";
import '../../assets/css/vitrine/vitrine.css'
import Produto from '../../components/produto';
import API_URL from "../../util/API/apiRequest";

function VitrinePage() {

    const [produtos, setProdutos] = React.useState([])

    React.useEffect(()=>{
        if(JSON.parse(localStorage.getItem('produtos')) !== null){
            setProdutos(...produtos, JSON.parse(localStorage.getItem('produtos')))
        }else{
             axios.request({
                    method: 'GET',
                    url: API_URL + '/produtos/todos'
                    }).then((request)=>{
                        setProdutos(request.data)
                        console.log(request.data)
                        localStorage.setItem('produtos', JSON.stringify(request.data));
                    })
        }
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



    return (
        <>
            <main className="conteudo-principal">
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

export default VitrinePage;