import React from "react";
import '../../assets/css/botaoQuantidade/botaoQuantidade.css';
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

function BotaoQuantidade({color, valor, onChangeValue, tamanho}){

    return(
        <>
        <div className="botoes_quantidade__container" style={{width: tamanho +"%"}}>
            <p className="quantidade_text">Quantidade:</p>
            <div className="botoes__container">
                <RemoveCircleOutlinedIcon
                    
                    sx={{fontSize: 40}}  
                    color="#6c757d" 
                    onClick={(event)=>{
                        if(valor === 1){
                        }else onChangeValue(event, -1)
                    }}/>
                <input className="inputQuantidade" readOnly value={valor} type="number" />
                <AddCircleOutlinedIcon 
                    sx={{fontSize: 40}} 
                    color="#6c757d" 
                    onClick={(event)=>{
                         if(valor === 10){
                        }else onChangeValue(event, +1)}}/>
            </div>
        </div>
        </>
    )
}

export default BotaoQuantidade;