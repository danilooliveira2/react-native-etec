import React from 'react';

// Recursos de Navegação - É necessário instalar os pacotes
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// npm install @react-navigation/native-stack
// npm install react-native-screens react-native-safe-area-context



//Importação das páginas que serão usadas
import Login from './telas/Login';
import IMC from './telas/IMC/imc.js';
import Noticia from './telas/Noticia/';
import Inicio from './telas/Splash';
// import Contato from './src/pages/Contato';

//Criação da Lista de Telas
const Stack = createNativeStackNavigator();


export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
    
    
        <Stack.Screen 
          name="Inicio"        // Esse é o nome na tela, para ser usado nas rotas.
          component={Inicio}   // Localização da tela
          options={{
            title:'Protótipo: Stack',
            headerStyle:{
              backgroundColor: '#4900b6'
            },
  
            headerTintColor: '#fff',
            headerTitleAlign: 'center'
          }}
          />
    
        <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{
          title: 'Autenticação de Usuário',
          headerStyle:{
            backgroundColor: '#1e368f'
          },

          headerTintColor: '#fff',
          headerTitleAlign: 'center'

          
        }}
        />

        
    <Stack.Screen 
        name="Noticia" 
        component={Noticia} 
        options={{
          title: 'Notícias da Semana',
          headerStyle:{
            backgroundColor: '#4900b6'
          },

          headerTintColor: '#fff',
        }}
        />

        <Stack.Screen 
        name="IMC"        // Esse é o nome na tela, para ser usado nas rotas.
        component={IMC}   // Localização da tela
        options={{
          title:'Tela de IMC'
        }}
        />




        {/* <Stack.Screen 
        name="Contato"
        component={Contato}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}