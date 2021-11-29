import {Route, BrowserRouter, Switch} from 'react-router-dom';
import CadastroPage from './pages/cadastro';
import * as React from 'react'
import VitrinePage from './pages/vitrine';
import LoginPage from './pages/login';
import DetalheProduto from './pages/produtoDetalhe';
import CestaPage from './pages/cesta';
import EsqueciSenhaPage from './pages/esqueciSenha';
// import HeaderComponent from './components/header';
// import FooterComponent from './components/footer';





const RoutesApp = ()=> {

    
    return(
        <>
        <BrowserRouter>
            {/* <HeaderComponent /> */}
            <Switch>
                <Route exact={true} path="/"><VitrinePage/></Route>

                <Route  path="/cadastro"><CadastroPage/></Route>

                <Route  path="/login"><LoginPage/></Route>

                <Route  path="/detalheproduto"><DetalheProduto/></Route>

                <Route  path="/cesta"><CestaPage/></Route>

                <Route  path="/esqueci-senha"><EsqueciSenhaPage/></Route>
            </Switch>
            {/* <FooterComponent/> */}
        </BrowserRouter>       
        </>
    )

}

export default RoutesApp;