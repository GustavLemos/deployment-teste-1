import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FormCadastro from '../components/formUser';
import ButtonCadastro from '../components/buttonCadastro';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Cadastro() {
    const [nome, setNome] = useState('');
    const [cpf, setCPF] = useState('');
    const [rg, setRG] = useState('');
    const [telefone, setTelefone] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [senha, setSenha] = useState('');
    const [genero, setGenero] = useState('Masculino');
    const [message, setMessage] = useState('');

    const cadastrar = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            const response = await axios.post(
                'https://deployment-teste-1.onrender.com/colaborador', // URL da sua rota de cadastro
                { nome, cpf, rg, telefone, dataNascimento, senha, genero }, // Dados do usuário
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                        'accept': 'application/json' // Usar o token gerado no login para autenticar a requisição
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
        <div className='userSign'>
            <form onSubmit={handleSubmit}>
                <div id='header-form'>
                    <h2>Cadastro de Usuário</h2>
                </div>
                <FormCadastro id={"top"} placeholder={['Nome']} value={nome} onChange={(e) => setNome(e.target.value)} />
                <div id='middle'>
                    <FormCadastro id={"middle-left"} placeholder={['CPF', 'RG', 'Telefone']} value={cpf} onChange={(e) => setCPF(e.target.value)} />
                    <FormCadastro id={"middle-right"} placeholder={['Senha']}>
                        <input id='date' type='date' value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} />
                        <select value={genero} onChange={(e) => setGenero(e.target.value)}>
                            <option value="Masculino">Masculino</option>
                            <option value="Feminino">Feminino</option>
                        </select>
                    </FormCadastro>
                </div>
                <div id='button-container'>
                    <ButtonCadastro text={"Cadastrar"} width={'65%'} type="submit" onPress={cadastrar} />
                </div>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Cadastro;
