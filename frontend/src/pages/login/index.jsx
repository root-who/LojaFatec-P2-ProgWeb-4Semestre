import '../../assets/css/login/login.css'
function LoginPage() {
    return (
        <>
            <section class="conteudoAutentica">
                <div class="cadastrado">
                    <h1>Já Tenho cadastro</h1>
                    <form class="row g-3 needs-validation" style={{justifyContent: "flex-start"}} novalidate>
                        <div class="col-md-8">
                            <label for="validacaoSenha" class="form-label">Email</label>
                            <div class="input-group has-validation">
                                <span class="input-group-text" id="inputGroupPrepend">*</span>
                                <input type="text" class="form-control" id="validacaoSenha" aria-describedby="inputGroupPrepend" required/>
                                <div class ="invalid-feedback">
                                PorFavor digite seu email.
                                </div>
                            </div>
                        </div>
                        <div class="col-md-8">
                            <label for="validacaoSenha" class="form-label">Senha</label>
                            <div class="input-group has-validation">
                                <span class="input-group-text" id="inputGroupPrepend">*</span>
                                <input type="password" class="form-control" id="validacaoSenha" aria-describedby="inputGroupPrepend" required/>
                                <div class ="invalid-feedback">
                                Porfavor Digite a senha.
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <button class="btn btn-primary" type="submit">Logar</button>
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