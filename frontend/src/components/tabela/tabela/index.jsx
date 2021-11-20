import React from 'react';
import '../../../assets/css/tabela/tabela.css'
import TabelaBody from '../body';
import TabelaHeader from '../header';

function TabelaCesta({headers, body, onDeleteItemClick}) {
    return (
        <>
        <div className="tabela__container" >
            <table className="table" >
                <TabelaHeader  headers={headers}/>
                <TabelaBody onDeleteItemClick={onDeleteItemClick} body={body}/>
            </table>
        </div>
        </>
    )
}

export default TabelaCesta;