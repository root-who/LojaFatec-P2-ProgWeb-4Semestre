import Alert from 'react-bootstrap/Alert'
import React from 'react';
import '../../assets/css/esqueciSenha/esqueciSenha.css'
import InputFormCadastro from '../../components/inputFormCadastro';
import validaForm from '../../util/validacoes';

function EsqueciSenhaPage() {

    const [email, setEmail] = React.useState("");
    const [errors, setErrors] = React.useState({
        email: { hasErros: true, classValid: "", message: "" },
        senha: { hasErros: true, classValid: "", message: "" }
    })
    const [alertMessaage, setAlertMessage] = React.useState({
        alertView: false,
        text: "",
        color: ""
    });

    function validar(){
        if(validaForm.validacaoEsqueci(errors)){
            setAlertMessage({...alertMessaage,
            text:"Erro no campo de email, verifique e corrija antes de enviar!",
            color: "danger",
            alertView:true
            })
        }else{
            
            setAlertMessage({...alertMessaage, 
            text:"Email enviado com sucesso, em breve chegará para você, lembre-se de checar a caixa de spam!", 
            color: "success",
            alertView:true
            })  
        }
    }

    function formSubmit(event) {
        event.preventDefault();
        validar()
    }
    return (
        <>
            <div class="titulo-esqueciSenha">
                <h1>Enviaremos um email de redefinição de senha</h1>
            </div>
            <Alert style={{ height: "60px" }} show={alertMessaage.alertView} variant={alertMessaage.color} onClose={() => setAlertMessage({ ...alertMessaage, alertView: false })} dismissible>
                <Alert.Heading>{alertMessaage.text}</Alert.Heading>
            </Alert>
            <main class="container">
                <div class="input-esqueciSenha">
                    <form class="row g-3 needs-validation" style={{ justifyContent: "center" }} novalidate>
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

                        <div class="col-md-8">
                            <button class="btn btn-primary" onClick={(event) => { formSubmit(event) }}>Enviar</button>
                        </div>

                    </form>
                </div>
            </main>
        </>
    )
}
export default EsqueciSenhaPage;