import axios from "axios";
import React from "react";
import '../../assets/css/vitrine/vitrine.css'
import Produto from '../../components/produto';
import API_URL from "../../util/API/apiRequest";
import { CircularProgress} from '@material-ui/core';

function VitrinePage() {

    const [produtos, setProdutos] = React.useState([])
    const [request, setRequest] = React.useState(false)

    React.useEffect(()=>{
        if(JSON.parse(localStorage.getItem('produtos')) !== null){
            setProdutos(...produtos, JSON.parse(localStorage.getItem('produtos')))
        }else{
            setRequest(true);
             axios.request({
                    method: 'GET',
                    url: API_URL + '/produtos/todos'
                    }).then((request)=>{
                        setProdutos(request.data)
                        console.log(request.data)
                        localStorage.setItem('produtos', JSON.stringify(request.data));
                        setRequest(false)
                    }).catch((response)=>{setRequest(false)})
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
            <div style={{ margin:"2.75rem 0 10rem 0", width:"100%", textAlign:"center", visibility: request ? "visible" : "hidden", display: request ? "block" : "none" }}>
                 <CircularProgress color="primary" />
            </div>
        </>
    )
}

export default VitrinePage;