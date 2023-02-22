// import firebase from 'firebase';
import { firebase } from '@react-native-firebase/database';

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

export default firebase;
