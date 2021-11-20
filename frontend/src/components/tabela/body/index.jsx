import React from 'react';
import TabelaColuna from '../coluna';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
function TabelaBody({body, onDeleteItemClick}){

    // eslint-disable-next-line no-unused-vars
    const [total, setTotal] = React.useState(0.00);

    function calcTotal(){
        if(body !== null){
            var totalValue = 0.0;
            body.forEach((element) => {
                totalValue += parseFloat(element.valorUnitario * parseInt(element.quantidade));
            });
            setTotal(totalValue);
        }else{
            setTotal(0.0);
        }
    }

    function deleteItem(event, index){
        var carrinho = JSON.parse(localStorage.getItem('cesta'));  
        carrinho.splice(index, 1)
        localStorage.setItem('cesta', JSON.stringify(carrinho));
        onDeleteItemClick()
    }

    React.useEffect(()=>{
        calcTotal()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[body, total])
    return(
        <>
            <tbody className="tabelaBody" >
                    
                    {   body === null ||
                        
                            body.map((value, index)=>{                               
                                return(
                                    <tr key={index} className="tabelaLinha" style={{}}>
                                        <TabelaColuna  value={value.titulo}  size={"3"}  type={"line"}/>
                                        <TabelaColuna  value={value.quantidade}  size={"1"}  type={"line"}/>
                                        <TabelaColuna  value={value.valorUnitario}  size={"2"}  type={"line"}/>
                                        <TabelaColuna  onClick={(event)=>{deleteItem(event, index)}} element={<DeleteForeverIcon sx={{fontSize:30}}/>} size={"_5"}  
                                                       type={"icon"} 
                                                       />
                                    </tr>
                                ) 
                            }) 
                    }
                <tr className="tabelaLinha">
                    <TabelaColuna  value={"Total"}  size={"3"}  type={"line"}/>
                    <TabelaColuna  value={""}  size={"1"}  type={"line"}/>
                    
                    <TabelaColuna  value={total.toFixed(2)}  size={"2"}  type={"line"}/>   
                </tr>
            </tbody>
        </>
    )
}

export default TabelaBody;