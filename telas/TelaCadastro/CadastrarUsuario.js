// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import * as firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';

const firebaseConfig = {
  // Sua configuração do Firebase aqui
  apiKey: "AIzaSyC6bariKjvRHlHutT_PMmDvSqgMvaUJs5w",
  authDomain: "etec-69aa2.firebaseapp.com",
  projectId: "etec-69aa2",
  storageBucket: "etec-69aa2.appspot.com",
  messagingSenderId: "388741545055",
  appId: "1:388741545055:web:06aeead691c341e24eafea",
  measurementId: "G-QVR5JD5R0N"
};


  firebase.initializeApp(firebaseConfig);

async function cadastrarUsuario(nome, email, senha) {
    try {
      const { user } = await firebase.auth().createUserWithEmailAndPassword(email, senha);
      console.log('Usuário registrado com sucesso!', user.uid);
    } catch (error) {
      console.error(error);
    }
  }
  


