import '../../assets/css/esqueciSenha/esqueciSenha.css'

function EsqueciSenhaPage() {
return(
    <>
        <div class="titulo-esqueciSenha">
            <h1>Enviaremos um email de redefinição de senha</h1>
        </div>
        <main class="container">
            <div class="input-esqueciSenha">
                <form class="row g-3 needs-validation" style={{justifyContent:"center"}} novalidate>
                    <div class="col-md-8">
                        <label for="validacaoNome" class="form-label">Informe seu email</label>
                        <div class="input-group has-validation">
                            <span class="input-group-text" id="inputGroupPrepend">*</span>
                            <input type="text" class="form-control" id="validacaoNome" aria-describedby="inputGroupPrepend" required/>
                            <div class ="invalid-feedback">
                                Por Favor digite seu email.
                            </div>
                        </div>
                    </div>

                    <div class="col-md-8">
                        <button class="btn btn-primary" type="submit">Enviar</button>
                    </div>

                </form>
            </div>
        </main>
    </>
)
}
export default EsqueciSenhaPage;