/*import React from 'react';

import FormLogin from "../components/formLogin";

import '../pages/style/login.css';

const initialState = {
    user: {cpf: '', senha: '', message: ''}
}

function Login() {

    const state = { ...initialState }

    const handleLogin = () => {
        history.push('/reserva');
    };

    return (
        <div className="loginPage">
            <FormLogin />
        </div>
    );
}

export default Login;
*/
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importe useNavigate para lidar com navegação
import FormLogin from '../components/formLogin'; // Verifique o caminho e o nome do componente FormLogin
import '../pages/style/login.css';

const Login = () => {
    const navigate = useNavigate(); // Hook para navegação

    const handleLogin = () => {
        // Simulação de autenticação (substitua com lógica real de autenticação)
        const isAuthenticated = true; // Simulação de autenticação bem-sucedida

        if (isAuthenticated) {
            navigate('/cadastro'); // Navega para a página de reserva após o login
        } else {
            // Lógica para lidar com falha na autenticação, se necessário
            console.error('Falha na autenticação');
        }
    };

    return (
        <div className="loginPage">
            <FormLogin />
        </div>
    );
};

export default Login;
