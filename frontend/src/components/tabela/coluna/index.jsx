import React from 'react';

function TabelaColuna({type, value, size, element,onClick}){
    
    function headerOrLine(type){
        if(type === "header"){
            return <th className={"tabelaColuna"+size}>{value}</th>
        }
        if(type === "line"){
            return <td className={"tabelaColuna"+size}><p className={"tabelaConteudo"+size}>{ size === "2" ? "R$ " + value : value}</p></td>
        }
        if(type === "icon"){
            return <td onClick={onClick} className={"tabelaColuna"+size}><p className={"tabelaConteudo"+size}>{element}</p></td>
        }
    }

    return(
        <>
            {headerOrLine(type)}
        </>
    )
}

export default TabelaColuna;