import React, { useState } from "react";
import './style/form.css';
import login from '../integration/login'; // Importe a função de login
import Icon from "./icon";
import ButtonCadastro from "./buttonCadastro";
import { useHistory } from "react-router-dom"; 

export default () => {
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
    const history = useHistory();

    const handleSubmit = async (event) => {
        //window.location.href = '/reserva'; 
        event.preventDefault();
        if (await login({ cpf, senha })) {
            //window.location.href = 'app/cadastro'; // Redireciona para "/reserva" após um login bem-sucedido
             history.push('/app/cadastro');
        }
    };

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <Icon size={"100px"} />
                <h2>LocaFast</h2>
                <div className="input-form-container">
                    <input className="input-form" type="text" placeholder="cpf" value={cpf} onChange={(e) => setCpf(e.target.value)}></input>
                    <i className='bx bx-user'></i>
                </div>
                <div className="input-form-container">
                    <input className="input-form" type="password" placeholder="senha" value={senha} onChange={(e) => setSenha(e.target.value)}></input>
                    <i className='bx bx-lock-alt' ></i>
                </div>
                <ButtonCadastro text={"Entrar"} width={'85%'}/>
                <a href="#">Esqueceu a senha?</a>
            </form>
        </div>
    );
}
