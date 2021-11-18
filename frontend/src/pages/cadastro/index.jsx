import Alert from 'react-bootstrap/Alert'
import React from 'react';
import '../../assets/css/cadastroPage/cadastro.css'
import InputFormCadastro from '../../components/inputFormCadastro';
import validaForm from '../../util/validacoes/index'

function CadastroPage() {
    const [senha, setSenha] = React.useState("");
    const [cpf, setCpf] = React.useState("");
    const [confirmaSenha, setConfirmaSenha] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [nome, setNome] = React.useState("");
    const [celular, setCelular] = React.useState("");
    const [endereco, setEndereco] = React.useState("");
    // eslint-disable-next-line
    const [spinner, setSpinner] = React.useState(false);
    const [alertView, setAlertView] = React.useState(false);
    const [alertMessaage, setAlertMessage] = React.useState({
        text: "Erro em algum campo do formulario, verifique e corrija antes de enviar",
        color: ""
    });

    const [errors, setErrors] = React.useState({
        nome: { hasErros: false, classValid: "", message: "" },
        cpf: { hasErros: false, classValid: "", message: "" },
        celular: { hasErros: false, classValid: "", message: "" },
        email: { hasErros: false, classValid: "", message: "" },
        senha: { hasErros: false, classValid: "", message: "" },
        confirmaSenha: { hasErros: false, classValid: "", message: "" },
        endereco: { hasErros: false, classValid: "", message: "" }
    })

    function formSubimit(event) {
        event.preventDefault();
        if(validaForm.validacao(errors)){
            setAlertView(true);
            setAlertMessage({...alertMessaage, text:"Erro em algum campo do formulario, verifique e corrija antes de enviar!", color: "danger"})
        }else{
            setAlertView(true);
            setAlertMessage({...alertMessaage, text:"Cadastro realizado com sucesso!", color: "success"})  
        }
    }

    return (
        <>
            <div className="titulo-cadastro">
                <h1>Faça seu Cadastro</h1>
            </div>
            <Alert style={{height:"60px"}} show={alertView} variant={alertMessaage.color} onClose={() => setAlertView(false)} dismissible>
                <Alert.Heading>{alertMessaage.text}</Alert.Heading>
            </Alert>
            <main className="container">
                <form className="row g-3 needs-validation" style={{ justifyContent: "flex-start" }} validate>
                    <InputFormCadastro onChangeValue={(event) => {
                        event.preventDefault();
                        setNome(event.target.value);
                    }}
                        onBlurInput={(event) => {
                            setErrors({ ...errors, nome: validaForm.validaNome(nome) })
                        }}
                        labelText={"Nome"} inputClassName={errors.nome.classValid} errorMessage={errors.nome.message} />
                    <InputFormCadastro onChangeValue={(event) => {
                        event.preventDefault();
                        setEmail(event.target.value);
                    }}
                        onBlurInput={(event) => {
                            setErrors({ ...errors, email: validaForm.validaEmail(email) })
                        }}
                        labelText={"Email"} inputClassName={errors.email.classValid} errorMessage={errors.email.message} />
                    <InputFormCadastro onChangeValue={(event) => {
                        event.preventDefault();
                        setCpf(event.target.value);
                    }}
                        onBlurInput={(event) => {
                            setErrors({ ...errors, cpf: validaForm.validaCpf(cpf) })
                        }}
                        labelText={"CPF"} inputClassName={errors.cpf.classValid} errorMessage={errors.cpf.message} />
                    <InputFormCadastro onChangeValue={(event) => {
                        event.preventDefault();
                        setCelular(event.target.value);
                    }}
                        onBlurInput={(event) => {
                            setErrors({ ...errors, celular: validaForm.validaCelular(celular) })
                        }}
                        labelText={"Celular"} inputClassName={errors.celular.classValid} errorMessage={errors.celular.message} />
                    <InputFormCadastro onChangeValue={(event) => {
                        event.preventDefault();
                        setSenha(event.target.value);
                    }}
                        onBlurInput={(event) => {
                            setErrors({ ...errors, senha: validaForm.validaSenha(senha) })

                        }}
                        labelText={"Senha"} inputClassName={errors.senha.classValid} errorMessage={errors.senha.message} />
                    <InputFormCadastro onChangeValue={(event) => {
                        event.preventDefault();
                        setConfirmaSenha(event.target.value);
                    }}
                        onBlurInput={(event) => {
                            setErrors({ ...errors, confirmaSenha: validaForm.validaConfirmacaoSenha(senha, confirmaSenha) })
                        }}
                        labelText={"Confirmação de Senha"} inputClassName={errors.confirmaSenha.classValid} errorMessage={errors.confirmaSenha.message} />
                    <InputFormCadastro onChangeValue={(event) => {
                        event.preventDefault();
                        setEndereco(event.target.value);
                    }}
                        onBlurInput={(event) => {
                            setErrors({ ...errors, endereco: validaForm.validaEndereco(endereco) })
                        }}
                        labelText={"Endereço"} inputClassName={errors.endereco.classValid} errorMessage={errors.endereco.message} />
                    <div className="col-12">
                        <button className="btn btn-primary" onClick={(event) => { formSubimit(event) }}>Cadastrar</button>
                    </div>
                </form>

            </main>
        </>
    )
}

export default CadastroPage;