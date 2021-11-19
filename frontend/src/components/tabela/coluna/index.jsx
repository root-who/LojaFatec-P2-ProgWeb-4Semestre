import React from 'react';

function TabelaColuna({type, value, size}){
    
    function headerOrLine(type){
        if(type === "header"){
            return <th className={"tabelaColuna"+size}>{value}</th>
        }
        if(type === "line"){
            return <td className={"tabelaColuna"+size}><p className={"tabelaConteudo"+size}>{ size === "2" ? "R$ " + value : value}</p></td>
        }
    }

    return(
        <>
            {headerOrLine(type)}
        </>
    )
}

export default TabelaColuna;