import React from 'react';
import '../../../assets/css/tabela/tabela.css'
import TabelaBody from '../body';
import TabelaHeader from '../header';

function TabelaCesta({headers, body}) {
    return (
        <>
        <div className="tabela__container" >
            <table class="table" >
                <TabelaHeader headers={headers}/>
                <TabelaBody body={body}/>
            </table>
        </div>
        </>
    )
}

export default TabelaCesta;