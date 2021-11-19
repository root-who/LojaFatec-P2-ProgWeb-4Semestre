import React from 'react'
import '../../assets/css/cesta/cesta.css'
import TabelaCesta from '../../components/tabela/tabela'

function CestaPage() {
    // eslint-disable-next-line no-unused-vars
    const [valoresHeader, setValores] = React.useState(
            [{nome: "Item", size:"3"},
            {nome: "Quantidade", size:"1"},
            {nome: "Valor", size:"2"}]
    )

    // eslint-disable-next-line no-unused-vars
    const [valoresBody, setValoresBody] = React.useState(
            [{item: "Nike Air Maxaaaaaaaaaaaaaaaaaaaaa", quantidade:"3", valor: "2560.50"},
            {item: "Adidas nas xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", quantidade:"1" , valor: "1540.6"},
            {item: "Nike Travis Sccottsasadasfddddddddddddddddddddd", quantidade:"2" , valor: "2500.0"}]
    )


    return (
        <>
            <main class="conteudo-principal-cesta">
                <h1>Cesta</h1>
                <TabelaCesta body={valoresBody} headers={valoresHeader}/>
                <div class="cesta-botoes">
                    <button class="btn btn-primary" type="submit">Limpar cesta</button>
                    <button class="btn btn-primary" type="submit">Finalizar</button>
                </div>
            </main>

            
        </>
    )
}

export default CestaPage
