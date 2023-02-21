import React from 'react';
import { View, Text, Image, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TelaSplashInicial = () => {

  
  const navigation = useNavigation();

  function navegar(nomeTela) {
    console.log('Navegando...')
    navigation.navigate(nomeTela)
  }


  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../src/logo.png')} />
      <Text style={styles.title}>Seja bem-vindo!
      {'\n'}
      Faça agora um cadastro</Text>
      
      <TouchableOpacity style={styles.button} 
            onPress={() => navegar('Login')}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      <View style={{marginBottom: 60}}></View>

      <TouchableOpacity style={styles.button2}
            onPress={() => navegar('Noticia')}>
        <Text style={styles.buttonText2}>Acesso sem cadastro</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  logo: {
     width: 195,
     height: 110,
    marginBottom: 30,
    resizeMode: "stretch",
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 45,
    textAlign: 'center'
  },
  
  button: {
    backgroundColor: '#4900b6',
    borderRadius: 7,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
  },

  button2: {
    backgroundColor: '#dad5e0',
    borderRadius: 7,
    paddingVertical: 6,
    paddingHorizontal: 20,
    marginVertical: 5,
   
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }, 
  buttonText2: {
    color: 'gray',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TelaSplashInicial;
