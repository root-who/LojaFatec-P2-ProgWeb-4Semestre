import React from 'react';
import TabelaColuna from '../coluna';

function TabelaBody({body}){
    return(
        <>
            <tbody className="tabelaBody">
                
                    {
                        body.map((value)=>{
                            return(
                                <tr className="tabelaLinha">
                                    <TabelaColuna value={value.item}  size={"3"}  type={"line"}/>
                                    <TabelaColuna value={value.quantidade}  size={"1"}  type={"line"}/>
                                    <TabelaColuna value={value.valor}  size={"2"}  type={"line"}/>
                                </tr>
                            ) 
                        })
                    }
                
            </tbody>
        </>
    )
}

export default TabelaBody;