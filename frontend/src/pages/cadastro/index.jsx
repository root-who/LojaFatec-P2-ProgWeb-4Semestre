import Alert from 'react-bootstrap/Alert'
import React, { useEffect } from 'react';
import '../../assets/css/cadastroPage/cadastro.css'
import InputFormCadastro from '../../components/inputFormCadastro';
import validaForm from '../../util/validacoes/index'
import axios from 'axios';
import API_URL from '../../util/API/apiRequest';

function CadastroPage() {
    const [senha, setSenha] = React.useState("");
    const [cpf, setCpf] = React.useState("");
    const [confirmaSenha, setConfirmaSenha] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [nome, setNome] = React.useState("");
    const [celular, setCelular] = React.useState("");
    const [endereco, setEndereco] = React.useState("");
    const [valido, setValido] = React.useState(false);
    // eslint-disable-next-line
    const [spinner, setSpinner] = React.useState(false);
    const [alertMessaage, setAlertMessage] = React.useState({
        alertView: false,
        text: "",
        color: ""
    });

    const [errors, setErrors] = React.useState({
        nome: { hasErros: true, classValid: "", message: "" },
        cpf: { hasErros: true, classValid: "", message: "" },
        celular: { hasErros: true, classValid: "", message: "" },
        email: { hasErros: true, classValid: "", message: "" },
        senha: { hasErros: true, classValid: "", message: "" },
        confirmaSenha: { hasErros: true, classValid: "", message: "" },
        endereco: { hasErros: true, classValid: "", message: "" }
    })

    useEffect(()=>{
        document.getElementById("btnEnviar").addEventListener("click", ((event)=>{
            setValido(validaForm.validacaoCadastro(errors));
        }))
    }, [errors, valido])

    

    function formSubimit(event) {
            event.preventDefault();
            if(valido){
                sendReques()
            }else{
                setAlertMessage({...alertMessaage,
                    text:"Erro em algum campo do formulario, verifique e corrija antes de enviar!",
                    color: "danger",
                    alertView: true})
            }
        }

     function sendReques(){
       setAlertMessage({...alertMessaage, alertView: false});
            axios.request({
                    method: 'post',
                    url: API_URL + '/cliente/cadastro',
                    data: {
                        "nome"  : nome ,
                        "senha" : senha ,
                        "email" : email,
                        "documento": cpf,
                        "telefone" : celular
                    }
                }).then((response)=>{
                     setAlertMessage({...alertMessaage,
                        text: response.data.errorText,
                        color:  response.data.color,
                        alertView: true})
                })
    } 

    return (
        <>
            <div className="titulo-cadastro">
                <h1>Faça seu Cadastro</h1>
            </div>
            <Alert style={{height:"60px"}} show={alertMessaage.alertView} variant={alertMessaage.color} onClose={() => setAlertMessage({...alertMessaage, alertView: false})} dismissible>
                <Alert.Heading>{alertMessaage.text}</Alert.Heading>
            </Alert>
            <main className="container">
                <form className="row g-3 needs-validation" style={{ justifyContent: "flex-start" }} validate>
                    <InputFormCadastro onChangeValue={(event) => {
                            event.preventDefault();
                            setNome(event.target.value);
                        }}
                        onBlurInput={(event) => {
                            setErrors({ ...errors, nome: validaForm.validaNome(nome)})
                        }}
                        labelText={"Nome"}
                        inputClassName={errors.nome.classValid} 
                        errorMessage={errors.nome.message} 
                        inputType={"text"} 
                        inputSize={"6"}/>
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
                        inputType={"email"} 
                        inputSize={"6"}/>
                    <InputFormCadastro onChangeValue={(event) => {
                            event.preventDefault();
                            setCpf(event.target.value);
                        }}
                        onBlurInput={(event) => {
                            setErrors({ ...errors, cpf: validaForm.validaCpf(cpf) })
                        }}
                        labelText={"CPF"} 
                        inputClassName={errors.cpf.classValid} 
                        errorMessage={errors.cpf.message} 
                        inputType={"number"} 
                        inputSize={"6"}/>
                    <InputFormCadastro onChangeValue={(event) => {
                            event.preventDefault();
                            setCelular(event.target.value);
                            
                        }}
                        onBlurInput={(event) => {
                            setErrors({ ...errors, celular: validaForm.validaCelular(celular) })
                        }}
                        labelText={"Celular"} 
                        inputClassName={errors.celular.classValid} 
                        errorMessage={errors.celular.message} 
                        inputType={"number"} 
                        inputSize={"6"}/>
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
                        inputSize={"6"}/>
                    <InputFormCadastro onChangeValue={(event) => {
                            event.preventDefault();
                            setConfirmaSenha(event.target.value);
                        }}
                        onBlurInput={(event) => {
                            setErrors({ ...errors, confirmaSenha: validaForm.validaConfirmacaoSenha(senha, confirmaSenha) })
                        }}
                        labelText={"Confirmação de Senha"} 
                        inputClassName={errors.confirmaSenha.classValid} 
                        errorMessage={errors.confirmaSenha.message}
                        inputType={"password"} 
                        inputSize={"6"}/>
                    <InputFormCadastro onChangeValue={(event) => {
                            event.preventDefault();
                            setEndereco(event.target.value);
                        }}
                        onBlurInput={(event) => {
                            setErrors({ ...errors, endereco: validaForm.validaEndereco(endereco) })
                        }}
                        labelText={"Endereço"} 
                        inputClassName={errors.endereco.classValid} 
                        errorMessage={errors.endereco.message} 
                        inputType={"text"}
                        inputSize={"6"}/>
                    <div className="col-12">
                        <button id="btnEnviar" className="btn btn-primary" onClick={(event) => { formSubimit(event) }}>Cadastrar</button>
                    </div>
                </form>

            </main>
        </>
    )
}

export default CadastroPage;