import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [cpf, setCPF] = useState('');
  const [rg, setRG] = useState('');
  const [telefone, setTelefone] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [senha, setSenha] = useState('');
  const [genero, setGenero] = useState('Masculino');

  const cadastrar = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const response = await axios.post(
        'http://localhost:3000/colaborador', // URL da sua rota de cadastro
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
      Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');
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
      Alert.alert('Erro', 'Erro ao cadastrar usuário. Verifique os dados e tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={cpf}
        onChangeText={setCPF}
      />
      <TextInput
        style={styles.input}
        placeholder="RG"
        value={rg}
        onChangeText={setRG}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={telefone}
        onChangeText={setTelefone}
      />
      <TextInput
        style={styles.input}
        placeholder="Data de Nascimento"
        value={dataNascimento}
        onChangeText={setDataNascimento}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        value={senha}
        onChangeText={setSenha}
      />
      <TextInput
        style={styles.input}
        placeholder="Gênero"
        value={genero}
        onChangeText={setGenero}
      />
      <Button
        title="Cadastrar"
        onPress={cadastrar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
});

export default Cadastro;
