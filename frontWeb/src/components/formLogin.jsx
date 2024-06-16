import React, { useState } from "react";
import './style/form.css';
import login from '../integration/login'; // Importe a função de login
import Icon from "./icon";
import ButtonCadastro from "./buttonCadastro";

const LoginForm = () => {
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (await login({ cpf, senha })) {
            window.location.href = '../pages/reserva'; // Redireciona para "/app/cadastro" após um login bem-sucedido
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

export default LoginForm;
