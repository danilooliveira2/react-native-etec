import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
 import cadastrarUsuario from './CadastrarUsuario.js';


function TelaCadastro() {
    
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function handleCadastro() {
    // Aqui você pode chamar a função para salvar os dados no MongoDB

    
    cadastrarUsuario(nome, email, senha)
    .then(data => console.log(data))
    .catch(error => console.error(error));
    // cadastrarUsuario(nome, email, senha);



    // console.log("Botao clicado");

  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value="Danilo de Oliveira"
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value="danilo@hotmail.com.br"
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value="123@asd23"
        onChangeText={setSenha}
        secureTextEntry
      />
      <Button title="Cadastrar"  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginVertical: 10,
    padding: 10,
  },
});



export default TelaCadastro;