import '../../assets/css/cesta/cesta.css'

function CestaPage() {
    return (
        <>
            <main class="conteudo-principal-cesta">
                <h1>Cesta</h1>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Item</th>
                            <th scope="col">Quantidade</th>
                            <th scope="col">Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Air max 90</th>
                            <td>1</td>
                            <td>R$ 799,00</td>

                        </tr>
                        <tr>
                            <th scope="row">Air Jordan</th>
                            <td>1</td>
                            <td>R$ 1599,00</td>

                        </tr>
                        <tr>
                            <th scope="row">Total</th>
                            <td></td>
                            <td >R$ 2398,00</td>
                        </tr>
                    </tbody>
                </table>
                <div class="cesta-botoes">
                    <button class="btn btn-primary" type="submit">Limpar cesta</button>
                    <button class="btn btn-primary" type="submit">Finalizar</button>
                </div>
            </main>
        </>
    )
}

export default CestaPage