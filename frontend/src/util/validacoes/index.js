/* eslint-disable no-self-assign */
class validaForm{

// eslint-disable-next-line
static validacao(errors){
    var erro = false;

    errors.nome.hasErros ? erro = true : erro = erro;
    errors.cpf.hasErros ? erro = true : erro = erro;
    errors.senha.hasErros ? erro = true : erro = erro;
    errors.confirmaSenha.hasErros ? erro = true : erro = erro;
    errors.endereco.hasErros ? erro = true : erro = erro;
    errors.email.hasErros ? erro = true : erro = erro;
    errors.cpf.hasErros ? erro = true : erro = erro;
    errors.celular.hasErros ? erro = true : erro = erro;
    console.log(erro)
    return erro;
}


// eslint-disable-next-line
static validaNome(nome){
        var letter = false; 
        var tam = false;     
        for (var i = 0; i < nome.length; i++) {                    
                    if(validaForm.isSymbol(nome[i])){ letter = true;}
                    if(validaForm.isNumeric(nome[i])){ letter = true;}
        };
        if(nome.length < 3){
            tam = true;
        }
        
        if(letter || tam){
            return {hasErros:true, classValid:"is-invalid", message:"Nome inválido, não deve conter números, nem simbolos !"}
        } 
        return ({hasErros:false, classValid: "is-valid", message:""})
}

// eslint-disable-next-line
static validaSenha(senha){
        var upper = false;
        var num = false;
        var simb = false;
        var tam = false;       
        for (var i = 0; i < senha.length; i++) {
                    if(validaForm.isSymbol(senha[i])){ simb = true;}
                    if(validaForm.isNumeric(senha[i])){ num = true;}
                    if(senha[i] === senha[i].toUpperCase()){ upper = true; }
        };
        if(senha.length < 8){
           tam = true;
        }
        
        if(!upper || !simb || !num || tam){
            
            return ({hasErros:true, classValid: "is-invalid", message:"Senha inválida, deve ter tamanho mínimo 8, deve haver 1(um) número, 1(um) simbolo e 1(uma) letra maiuscula"})
        }
        return ({hasErros:false, classValid: "is-valid", message:""})
    }

// eslint-disable-next-line
static validaConfirmacaoSenha(senha, conf){
        if(conf === senha) return ({hasErros:false, classValid: "is-valid", message:""}) 
        else return ({hasErros:true, classValid: "is-invalid", message:"Confirmação de senha não está igual o campo senha !"})
    }

// eslint-disable-next-line
static validaEmail(email){
     // eslint-disable-next-line
    var regExpCom = /^\w{1,50}\@\D{1,50}\.com$/g;
    // eslint-disable-next-line
    var regExpBr = /^\w{1,50}\@\D{1,50}\.com\.br$/g;
    
    if(regExpCom.test(email) || regExpBr.test(email)){
            return ({hasErros:false, classValid: "is-valid", message:""})  
        }
        return ({hasErros:true, classValid: "is-invalid", message:"Email inválido, digite no padrão xxxxx@host.com ou xxxxx@host.com.br"}) 
}



// eslint-disable-next-line
static validaCelular(celular){
     
    var regExp = /^\d{2}\d{5}\d{4}$/g;

    if(regExp.test(celular)){
            return ({hasErros:false, classValid: "is-valid", message:""})  
        }
        return ({hasErros:true, classValid: "is-invalid", message:"Celular inválido, digite apenas número no padrão xx xxxxx-xxxx !"}) 
}


// eslint-disable-next-line
static validaCpf(cpf){
    var regExp = /^\d{3}\d{3}\d{3}\d{2}$/g;

    if(regExp.test(cpf)){
        return ({hasErros:false, classValid: "is-valid", message:""})  
        }
        return ({hasErros:true, classValid: "is-invalid", message:"CPF inválido, digite apenas número no padrão xxx.xxx.xxx-xx !"}) 
}

static validaEndereco(endereco){
    var regExp = /\w/g;
    var tam = false;

    if(endereco.length < 8) tam = true
    if(regExp.test(endereco) && !tam){
        return ({hasErros:false, classValid: "is-valid", message:""})  
        }
        return ({hasErros:true, classValid: "is-invalid", message:"Digite um endereco válido !"}) 
}

static isSymbol(value){
      // eslint-disable-next-line
        var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

        if(format.test(value)){
        return true;
        } else {
        return false;
        }
}


    static isNumeric(value) {
        return /^-?\d+$/.test(value);
    }

}
export default validaForm;