import React from "react";
import '../../assets/css/vitrine/vitrine.css'
import Produto from '../../components/produto';

function VitrinePage() {

    const [produtos] = React.useState([
    {
        titulo:"Nike air force",
        urlImg:"https://authenticfeet.vteximg.com.br/arquivos/ids/245592-600-600/Tenis-Nike-Air-Force-1-Fontaka-Feminino-Rosa.jpg",
        valor:"850.00",
        destaque:"Nike rosa lindo",
        descritivo:"muitolindo blabla bla esse eh o descritivossssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss"
    },
    {
        titulo:"Nike air max",
        urlImg:"https://authenticfeet.vteximg.com.br/arquivos/ids/247351-600-600/Tenis-Nike-Air-Force-107-Lx-Feminino-Branco.jpg",
        valor:"650.00",
        destaque:"Nike branco lindo",
        descritivo:"aaaaaaaaaaaaaaaaaaaaaaaaatsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssivossssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss"
    }])
    return (
        <>
            <main class="conteudo-principal">
                {produtos.map((value) => {
                    return (
                        <Produto value={value}/>
                    )
                })}
            </main>
        </>
    )
}

export default VitrinePage;