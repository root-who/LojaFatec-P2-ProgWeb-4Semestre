import {Route, BrowserRouter, Switch} from 'react-router-dom';
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
            <Switch>
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
            </Switch>
        </BrowserRouter>
        <FooterComponent/>
        </>
    )

}

export default RoutesApp;