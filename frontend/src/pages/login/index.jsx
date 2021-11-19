import Alert from 'react-bootstrap/Alert'
import React from 'react';

import '../../assets/css/login/login.css'
import InputFormCadastro from '../../components/inputFormCadastro';
import validaForm from '../../util/validacoes';
function LoginPage() {
    const [senha, setSenha] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [alertMessaage, setAlertMessage] = React.useState({
        alertView: false,
        text: "",
        color: ""
    });
    const [errors, setErrors] = React.useState({
        email: { hasErros: true, classValid: "", message: "" },
        senha: { hasErros: true, classValid: "", message: "" }
    })

    function formSubmit(event){
        event.preventDefault();
        if(validaForm.validacaoLogin(errors)){
            setAlertMessage({...alertMessaage,
            text:"Erro em algum campo do formulario, verifique e corrija antes de enviar!",
            color: "danger",
            alertView:true
            })
        }else{
            
            setAlertMessage({...alertMessaage, 
            text:"Cadastro realizado com sucesso!", 
            color: "success",
            alertView:true
            })  
        }
    }

    return (
        <>
            <section class="conteudoAutentica">
                <div class="cadastrado">
                    <h1>Já Tenho cadastro</h1>
                    <Alert style={{height:"60px"}} show={alertMessaage.alertView} variant={alertMessaage.color} onClose={() =>  setAlertMessage({...alertMessaage, alertView: false})} dismissible>
                        <Alert.Heading>{alertMessaage.text}</Alert.Heading>
                    </Alert>
                    <form class="row g-3 needs-validation" style={{justifyContent: "flex-start"}} novalidate>
                        <InputFormCadastro onChangeValue={(event) => {
                            event.preventDefault();
                            setEmail(event.target.value);
                        }}
                        onBlurInput={(event) => {
                            setErrors({ ...errors, email: validaForm.validaEmail(email) })
                        }}
                        labelText={"Email"} 
                        inputClassName={errors.email.classValid} 
                        errorMessage={errors.email.message} 
                        inputType={"text"} 
                        inputSize={"8"}/>
                        <InputFormCadastro onChangeValue={(event) => {
                            event.preventDefault();
                            setSenha(event.target.value);
                        }}
                        onBlurInput={(event) => {
                            setErrors({ ...errors, senha: validaForm.validaSenha(senha) })

                        }}
                        labelText={"Senha"} 
                        inputClassName={errors.senha.classValid} 
                        errorMessage={errors.senha.message} 
                        inputType={"password"} 
                        inputSize={"8"}/>
                        <div class="col-12">
                            <button class="btn btn-primary" onClick={(event)=>{formSubmit(event)}}>Logar</button>
                        </div>
                        <div class="col-12">
                            <a href="./esqueci-senha" class="btn btn-secondary">Esqueci a senha</a>
                        </div>
                    </form>
                </div>
                <div class="naoCadastrado">
                    <h1>Ainda não tenho Cadastro</h1>
                    <a href="./cadastro" class="btn btn-secondary">Clique aqui</a>
                </div>

            </section>
        </>
    )
}

export default LoginPage;