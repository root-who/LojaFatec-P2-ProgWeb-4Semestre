import React from 'react';
import '../../assets/css/header/header.css'
import LOGO from '../../assets/images/logo.png'

function HeaderComponent() {
    return (
        <>
            <header class="p-3 bg-secondary text-white">
                <div class="header-flex">
                    <div class="header-logo">
                        <img class="img-fluid rounded-circle" src={LOGO} alt="Logo da loja, fundo roxo, com uma estrela amarela dentro e nela o nome da loja(Loja Fatec) e o slogan(proporcionando melhor conteúdo para p1)" />
                    </div>
                    <div class="input-group mb-3 header-busca">
                        <input type="text" class="form-control header-input-busca" placeholder="Digite o nome do produto que deseja buscar" />
                        <button class="input-group-text header-button-busca" id="basic-addon2">Buscar</button>
                    </div>
                </div>
            </header>
            <section class="menu-links">
                <div class="dropdown">
                    <div class="btn-group">
                        <a href="/" class="btn btn-secondary">Futuro Link</a>
                        <a href="/cesta" class="btn btn-secondary">Minha cesta</a>
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Menu
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="/cadastro">Cadastro</a></li>
                            <li><a class="dropdown-item" href="/">Lista de produtos</a></li>
                        </ul>
                        <a href="/login" class="btn btn-secondary">Login</a>
                    </div>
                </div>
            </section>
        </>
    )
}
export default HeaderComponent;