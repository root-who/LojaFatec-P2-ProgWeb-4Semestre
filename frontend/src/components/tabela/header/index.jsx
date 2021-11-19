import React from 'react';
import TabelaColuna from '../coluna';
import '../../../assets/css/tabela/tabela.css'

function TabelaHeader({headers}) {
    return (
        <>
            <thead className="tableHeader">
                <tr className="tabelaLinha">
                    {
                        headers.map((value, index)=>{
                            console.log(value.nome)
                            return <TabelaColuna value={value.nome}  size={value.size}  type={"header"}/>
                        })
                    } 
                </tr>
            </thead>
        </>
    )
}

export default TabelaHeader;