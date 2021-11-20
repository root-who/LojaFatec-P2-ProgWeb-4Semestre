import axios from 'axios'
import React from 'react'
import '../../assets/css/cesta/cesta.css'
import TabelaCesta from '../../components/tabela/tabela'
import API_URL from '../../util/API/apiRequest'

function CestaPage() {
    // eslint-disable-next-line no-unused-vars
    const [valoresHeader, setValores] = React.useState(
            [{nome: "Item", size:"3"},
            {nome: "Quantidade", size:"1"},
            {nome: "Valor", size:"2"}]
    )

    // eslint-disable-next-line no-unused-vars
    const [valoresBody, setValoresBody] = React.useState([])

    function limparCesta(event){
        axios.request({
                method:"POST",
                url: API_URL+"/cesta/apagar-cesta",
                data:{
                    "idCesta": JSON.parse(localStorage.getItem('user')).cestaId
                }
            }).then((response)=>{
                    setValoresBody([]);
            }).catch(()=>{
            
            })
            atualizaCarrinho()
    }

    function atualizaCarrinho(){
        axios.request({
                method:"POST",
                url: API_URL+"/cesta/lista-cesta",
                data:{
                    "idCesta": JSON.parse(localStorage.getItem('user')).cestaId
                }
            }).then((response)=>{
                setValoresBody(response.data)
            }).catch(()=>{
            
            }) 
    }



    React.useEffect(()=>{
        if(JSON.parse(localStorage.getItem('cesta')) === null){
            axios.request({
                method:"POST",
                url: API_URL+"/cesta/lista-cesta",
                data:{
                    "idCesta": JSON.parse(localStorage.getItem('user')).cestaId
                }
            }).then((response)=>{
                setValoresBody(response.data)
            }).catch(()=>{
            
            })
        }
    },[])

    return (
        <>
            <main className="conteudo-principal-cesta">
                <h1>Cesta</h1>
                <TabelaCesta onDeleteItemClick={atualizaCarrinho} body={valoresBody} headers={valoresHeader}/>
                <div className="cesta-botoes">
                    <button className="btn btn-primary" onClick={(event)=>{limparCesta(event)}}>Limpar cesta</button>
                    <button className="btn btn-primary" onClick={(event)=>{}} type="submit">Finalizar</button>
                </div>
            </main> 
        </>
    )
}

export default CestaPage
