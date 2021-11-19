import React from 'react';

function InputFormCadastro({labelText, inputClassName, errorMessage, onChangeValue, onBlurInput, inputType, inputSize}) {
    
    return (

        
        <>
            <div className={"col-md-"+ inputSize}>
                <label className="form-label">{labelText}</label>
                <div className="input-group has-validation">
                    <span className="input-group-text" id="inputGroupPrepend">*</span>
                    <input onChange={(event)=>{onChangeValue(event)}} onBlur={(event)=>{onBlurInput(event)}} type={inputType} className={"form-control " + inputClassName} id="validacaoNome" aria-describedby="inputGroupPrepend" required />
                    <div className="invalid-feedback">
                        {errorMessage}
                    </div>
                </div>
            </div>
        </>
    )
}

export default InputFormCadastro;