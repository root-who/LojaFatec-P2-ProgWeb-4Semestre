import Alert from 'react-bootstrap/Alert'
import React from 'react';
import { CircularProgress} from '@material-ui/core';
import '../../assets/css/login/login.css'
import InputFormCadastro from '../../components/inputFormCadastro';
import validaForm from '../../util/validacoes';
import axios from 'axios';
import API_URL from '../../util/API/apiRequest';
function LoginPage() {
    const [senha, setSenha] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [request, setRequest] = React.useState(false);
    const [user, setUser] = React.useState({});
    const [alertMessaage, setAlertMessage] = React.useState({
        alertView: false,
        text: "",
        hasError: false,
        color: ""
    });
    const [errors, setErrors] = React.useState({
        email: { hasErros: true, classValid: "", message: "" },
        senha: { hasErros: true, classValid: "", message: "" }
    })

    function formSubmit(event) {
        event.preventDefault();
        if (validaForm.validacaoLogin(errors)) {
            setAlertMessage({
                ...alertMessaage,
                text: "Erro em algum campo do formulario, verifique e corrija antes de enviar!",
                color: "danger",
                alertView: true
            })
        } else {
            setRequest(true)
            axios.request({
                method: 'post',
                url: API_URL + '/cliente/login',
                data: {
                    "senha": senha,
                    "email": email,
                }
            }).then((response) => {
                setRequest(false);
                setAlertMessage({
                    ...alertMessaage,
                    text: response.data.erro.errorText,
                    color: response.data.erro.color,
                    hasError: response.data.erro.hasError,
                    alertView: true
                })
                if(response.status !== 200){
                    setAlertMessage({
                        ...alertMessaage,
                        text: "Erro na conexão tente novamente mais tarde!",
                        color: "warning",
                        alertView: true
                    })
                }
                if (!response.data.erro.hasError) {                
                    setUser({ ...user, nome: response.data.cliente.nome, id: response.data.cliente.id })
                    localStorage.setItem('user', JSON.stringify({ nome: response.data.cliente.nome, id: response.data.cliente.id, cestaId: response.data.cestaId }));
                }
            }).catch((response)=>{
                console.log(response)
            })
        }
    }

    return (
        <>
            <section className="conteudoAutentica">
                <div className="cadastrado">
                    <h1>Já Tenho cadastro</h1>
                    <Alert style={{ height: "60px" }} show={alertMessaage.alertView} variant={alertMessaage.color} onClose={() => setAlertMessage({ ...alertMessaage, alertView: false })} dismissible>
                        <Alert.Heading>{alertMessaage.text}</Alert.Heading>
                    </Alert>
                    <form className="row g-3 needs-validation" style={{ justifyContent: "flex-start" }} noValidate>
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
                            inputSize={"8"} />
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
                            inputSize={"8"} />
                        <div className="col-12">
                            <button className="btn btn-primary" onClick={(event) => { formSubmit(event) }}>Logar</button>
                        </div>
                        <div style={{ visibility: request ? "visible" : "hidden", margin: request ? "1.5rem 0 0 0" : "0 0", display: request ? "block" : "none" }}>
                            <CircularProgress color="primary" />
                        </div>
                        <div className="col-12">
                            <a href="/esqueci-senha" className="btn btn-secondary">Esqueci a senha</a>
                        </div>

                    </form>
                </div>
                <div className="naoCadastrado">
                    <h1>Ainda não tenho Cadastro</h1>
                    <a href="/cadastro" className="btn btn-secondary">Clique aqui</a>
                </div>

            </section>
        </>
    )
}

export default LoginPage;