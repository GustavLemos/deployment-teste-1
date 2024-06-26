import React, { useState } from 'react';
import axios from 'axios';
import ButtonCadastro from '../components/buttonCadastro';
import '../pages/style/cadastro.css'; // Certifique-se de que o caminho para o CSS está correto
//comente
function Cadastro() {
    const [nome, setNome] = useState('');
    const [cpf, setCPF] = useState('');
    const [rg, setRG] = useState('');
    const [telefone, setTelefone] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [senha, setSenha] = useState('');
    const [genero, setGenero] = useState('Masculino');
    const [message, setMessage] = useState('');

    const cadastrar = async (event) => {
        event.preventDefault();

        try {
            const token = localStorage.getItem('token'); // Usar localStorage para obter o token
            const payload = {
                nome,
                cpf,
                rg,
                telefone,
                dataNascimento,
                senha,
                genero
            };
            // Redirecionamento após o cadastro
            window.location.href = '/';
            const response = await axios.post(
                'https://deployment-teste-1.onrender.com/colaborador',
                payload,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                }
            );

            console.log('Resposta da API:', response.data);
            setMessage('Usuário cadastrado com sucesso!');
            // Limpar os campos do formulário após o cadastro (opcional)
            setNome('');
            setCPF('');
            setRG('');
            setTelefone('');
            setDataNascimento('');
            setSenha('');
            setGenero('Masculino');


        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error);
            setMessage('Erro ao cadastrar usuário. Verifique os dados e tente novamente.');
        }
    };

    return (
        <div >
            <form onSubmit={cadastrar}>
                <div id='header-form'>
                    <h2>Cadastro de Usuário</h2>
                </div>
                <br/>
                <h3>Nome</h3>
                <div style={{ borderRadius: '5px', height: '40px', background: '#E4E9F7', marginTop: '10px', marginBottom: '10px' }}>
                    <input
                        type='text'
                        placeholder='Nome'
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        style={{ borderRadius: '5px', height: '100%', width: '100%', padding: '0 10px' }}
                    />
                </div>
                <br/>
                <h3>CPF</h3>
                <div style={{ borderRadius: '5px', height: '40px', background: '#E4E9F7', marginTop: '10px', marginBottom: '10px' }}>
                    <input
                        type='text'
                        placeholder='CPF'
                        value={cpf}
                        onChange={(e) => setCPF(e.target.value)}
                        style={{ borderRadius: '5px', height: '100%', width: '100%', padding: '0 10px' }}
                    />
                </div>
                <br/>
                <h3>RG</h3>
                <div style={{ borderRadius: '5px', height: '40px', background: '#E4E9F7', marginTop: '10px', marginBottom: '10px' }}>
                    <input
                        type='text'
                        placeholder='RG'
                        value={rg}
                        onChange={(e) => setRG(e.target.value)}
                        style={{ borderRadius: '5px', height: '100%', width: '100%', padding: '0 10px' }}
                    />
                </div>
                <br/>
                <h3>Telefone</h3>
                <div style={{ borderRadius: '5px', height: '40px', background: '#E4E9F7', marginTop: '10px', marginBottom: '10px' }}>
                    <input
                        type='text'
                        placeholder='Telefone'
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                        style={{ borderRadius: '5px', height: '100%', width: '100%', padding: '0 10px' }}
                    />
                </div>
                <br/>
                <h3>Data de Nascimento</h3>
                <div style={{ borderRadius: '5px', height: '40px', background: '#E4E9F7', marginTop: '10px', marginBottom: '10px' }}>
                    <input
                        type='date'
                        value={dataNascimento}
                        onChange={(e) => setDataNascimento(e.target.value)}
                        style={{ borderRadius: '5px', height: '100%', width: '100%', padding: '0 10px' }}
                    />
                </div>
                <br/>
                <h3>Senha</h3>
                <div style={{ borderRadius: '5px', height: '40px', background: '#E4E9F7', marginTop: '10px', marginBottom: '10px' }}>
                    <input
                        type='password'
                        placeholder='Senha'
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        style={{ borderRadius: '5px', height: '100%', width: '100%', padding: '0 10px' }}
                    />
                </div>
                <br/>
                <h3>Genero</h3>
                <div style={{ borderRadius: '5px', height: '40px', background: '#E4E9F7', marginTop: '10px', marginBottom: '10px' }}>
                    <select
                        value={genero}
                        onChange={(e) => setGenero(e.target.value)}
                        style={{ borderRadius: '5px', height: '100%', width: '100%', padding: '0 10px', background: '#E4E9F7', color: '#333' }}
                    >
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                    </select>
                </div>
                <br/>
                <div id='button-container'>
                    <ButtonCadastro text={"Cadastrar"} width={'65%'} type="submit" />
                </div>
            </form>
            <div className="message-container">
                {message && <p>{message}</p>}
            </div>
        </div>
    );
}

export default Cadastro;
