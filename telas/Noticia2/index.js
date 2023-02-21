/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, Text, Image, SafeAreaView, Button, ScrollView } from 'react-native';
// import BotaoComIcone from '../../componentes/ButtonWithIcon.js';
// import Icon from 'react-native-vector-icons/FontAwesome';

import { useNavigation } from '@react-navigation/native';

function Noticia2() {

  const navigation = useNavigation();
  function navegarParaIMC() {
    navigation.navigate('IMC')
  }

  return (

    // Safe Area View protege o meu conteúdo das margens laterais
    <SafeAreaView style={{marginHorizontal: 10}}>

      {/* Permite rolar a tela  */}
      <ScrollView>
        {/* Primeira Notícia */}

        {/* View é como se fosse uma DIV do HTML, para você separar cada conteúdo */}
        <View >
          {/* Componente para exibir textos */}
          <Text style={{ textAlign: 'center', marginBottom: 10, fontSize: 20, color: "#2A31B1", paddingTop: 150 }}>
            Este é meu primeiro projeto!</Text>

          {/* Componente de Imagem */}
          <Image
            style={{ width: '100%', height: 200, borderRadius: 10 }}
            source={{
              uri: 'https://images6.alphacoders.com/124/1247539.jpg'
            }
            }
          />
          {/* Criei uma View / "DIV"  */}
          <View style={{ margin: 10 }}></View>
          <Button
            title='Ir para Segunda Página'
            onPress={navegarParaIMC}
          > </Button>

          <View style={{ margin: 10 }}></View>

          {/* <BotaoComIcone
            // icone={'check-circle'}   //require('./caminho/para/o/icone.png')
            texto="Botão de Exemplo"
            onPress={() => {
              Alert.alert('Botão clicado!')
            }} /> */}

        </View>



        <View >
          <Text style={{ textAlign: 'center', marginBottom: 10, fontSize: 20, color: "#2A31B1", paddingTop: 20 }}>The last of Us ganha nova versão</Text>
          <Image
            style={{ width: '100%', height: 250, borderRadius: 5 }}
            source={{
              uri: 'https://meups.com.br/wp-content/uploads/2020/07/The-Last-of-Us-2-7-900x503.jpg'
            }
            }
          />
          <View style={{ margin: 10 }}></View>
          <Button title='Ok'> </Button>
          <View style={{ margin: 10, marginBottom: 40 }}></View>
        </View>




      </ScrollView>
    </SafeAreaView>




  );
}



export default Noticia2; 