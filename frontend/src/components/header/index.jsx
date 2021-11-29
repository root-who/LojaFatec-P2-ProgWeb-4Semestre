import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../../assets/css/header/header.css'
import LOGO from '../../assets/images/logo.png'
import API_URL from '../../util/API/apiRequest';
import {useHistory, useLocation } from 'react-router-dom'


function HeaderComponent({redirect}) {
    const [busca, setBusca] = useState("");
    const [isLoged, setIsLoged] = useState(false);


    


    const redirection = useHistory();
    let location = useLocation(); 
    useEffect(()=>{

    },[])

    function onButtonClicked(event){
        event.preventDefault();
        localStorage.setItem('palavraBuscada', busca)
        axios.request({
            method:"POST",
            url: API_URL+"/produtos/busca-pelo-titulo",
            data:{
                "titulo": busca
            }
        }).then((response)=>{
            if(response.status === 200){
                localStorage.setItem('busca', JSON.stringify(response.data))
                if(location.pathname === "/busca") window.location.reload();
                else redirection.push("/busca");
                
                //window.location.href = "/busca";
            }else {
                localStorage.removeItem('busca');
                redirection.push("/busca");
                //window.location.href = "/busca";
            }
        }).catch((response)=>{
            localStorage.removeItem('busca');
            redirection.push("/busca");
            //window.location.href = "/busca";
        })   
    }

    function onLogClicked(event){
            localStorage.removeItem('user');
            setIsLoged(false)
    }

    function onChangeValue(event){
        setBusca(event.target.value)
    }

    return (
        <>
            <header className="p-3 bg-secondary text-white">
                <div className="header-flex">
                    <div className="header-logo">
                        <img className="img-fluid rounded-circle" src={LOGO} alt="Logo da loja, fundo roxo, com uma estrela amarela dentro e nela o nome da loja(Loja Fatec) e o slogan(proporcionando melhor conteúdo para p1)" />
                    </div>
                    <div className="input-group mb-3 header-busca">
                        <input onChange={(event)=>{onChangeValue(event)}} type="text" className="form-control header-input-busca" placeholder="Digite o nome do produto que deseja buscar" />
                        <button onClick={(event)=>{onButtonClicked(event)}} className="input-group-text header-button-busca" id="basic-addon2">Buscar</button>
                    </div>
                </div>
            </header>
            <section className="menu-links">
                <div className="dropdown">
                    <div className="btn-group">
                        <a href="/" className="btn btn-secondary">Futuro Link</a>
                        <a href="/cesta" className="btn btn-secondary">Minha cesta</a>
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Menu
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="/cadastro">Cadastro</a></li>
                            <li><a className="dropdown-item" href="/">Lista de produtos</a></li>
                        </ul>
                        <a href="/login"  onClick={(event)=>{onLogClicked(event)}} className="btn btn-secondary">{isLoged ? "Logout" : "Login"}</a>
                    </div>
                </div>
            </section>
        </>
    )
}
export default HeaderComponent;