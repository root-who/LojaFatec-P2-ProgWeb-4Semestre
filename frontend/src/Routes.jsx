import {Route, BrowserRouter, Routes} from 'react-router-dom';
import CadastroPage from './pages/cadastro';

import * as React from 'react'
import VitrinePage from './pages/vitrine';
import LoginPage from './pages/login';
import DetalheProduto from './pages/produtoDetalhe';
import CestaPage from './pages/cesta';
import EsqueciSenhaPage from './pages/esqueciSenha';
import HeaderComponent from './components/header';
// import axios from 'axios';




const RoutesApp = ()=> {
    // eslint-disable-next-line 
    const [user, setUser] = React.useState({data: JSON.parse(localStorage.getItem('user'))});

// eslint-disable-next-line 
    function isAutenticated(){
        if(user.data === null || user.data === "") return false;
        else return true;
    }

    // eslint-disable-next-line 
    function logout(){
            localStorage.removeItem('user');
            console.log("funfou")  
        }

    // eslint-disable-next-line 
    function login(){
        setUser({...user, data: JSON.parse(localStorage.getItem('user'))})
        console.log("logou")
    }
    
    return(
        <>
        <HeaderComponent/>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={
                                        <VitrinePage/>
                                        }/>

                <Route exact path="/cadastro" element={
                        <CadastroPage/>
                        }/>

                <Route exact path="/login" element={
                                            <LoginPage/>
                                            }/>

                <Route exact path="/detalheproduto" element={
                                            <DetalheProduto/>
                                            }/>

                <Route exact path="/cesta" element={
                                            <CestaPage/>
                                            }/>

                <Route exact path="/esqueci-senha" element={
                                                    <EsqueciSenhaPage/>
                                                    }/>
            </Routes>
        </BrowserRouter>
        </>
    )

}

export default RoutesApp;