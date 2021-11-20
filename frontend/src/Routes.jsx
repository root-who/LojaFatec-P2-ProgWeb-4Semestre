import {Route, BrowserRouter, Routes} from 'react-router-dom';
import CadastroPage from './pages/cadastro';

import * as React from 'react'
import VitrinePage from './pages/vitrine';
import LoginPage from './pages/login';
import DetalheProduto from './pages/produtoDetalhe';
import CestaPage from './pages/cesta';
import EsqueciSenhaPage from './pages/esqueciSenha';
import HeaderComponent from './components/header';
import FooterComponent from './components/footer';





const RoutesApp = ()=> {

    
    return(
        <>
        <HeaderComponent />
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={
                                        <VitrinePage/>
                                        }/>

                <Route  path="/cadastro" element={
                        <CadastroPage/>
                        }/>

                <Route path="/login" element={
                                            <LoginPage/>
                                            }/>

                <Route path="/detalheproduto" element={
                                            <DetalheProduto/>
                                            }/>

                <Route  path="/cesta" element={
                                            <CestaPage/>
                                            }/>

                <Route  path="/esqueci-senha" element={
                                                    <EsqueciSenhaPage/>
                                                    }/>
            </Routes>
        </BrowserRouter>
        <FooterComponent/>
        </>
    )

}

export default RoutesApp;