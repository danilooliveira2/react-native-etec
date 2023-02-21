import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Card } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';


export default function App({ navigation }) {



  // O hook useState é uma função que permite adicionar 
  // estado a um componente funcional do React. 
  // O estado é uma maneira de armazenar dados em 
  // um componente e reagir a mudanças nesses dados.



  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState('');



  const calcularIMC = () => {
    const alturaMetros = altura / 100;
    const imc = peso / (alturaMetros * alturaMetros);
    setImc(imc.toFixed(2));
  };



  return (
    <View style={styles.container}>
        <Text style={styles.label}>Peso (kg):</Text>
        <TextInput
          style={styles.input}
          value={peso}
          onChangeText={setPeso}
          keyboardType="numeric"
        />
        <Text style={styles.label}>Altura (cm):</Text>
        <TextInput
          style={styles.input}
          value={altura}
          onChangeText={setAltura}
          keyboardType="numeric"
        />
        <Button style={styles.botao} title="Calcular IMC" 
        
        onPress={calcularIMC}
         />
        
        {/* Resultado do IMC */}
        {imc ? (
          <Text style={styles.resultado}>Seu IMC é {imc}</Text>
        ) : null}


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  botao : {
    paddingHorizontal: 10,
    color: "black"
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  input: {
    height: 40,
    width: "60%",
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  resultado: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});