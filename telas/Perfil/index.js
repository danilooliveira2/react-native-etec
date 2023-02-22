import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth'
// import firebase from '@react-native-firebase'
// import firebase from '../../Firebase';
import firestore from '@react-native-firebase/firestore';

// import firebase from '@react-native-firebase';


export default function ProfileScreen() {

    const [user, setUser] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [id, setId] = useState('');



    useEffect(() => {

        const currentUser = auth().currentUser;
        console.log("Dados atuais: ", currentUser);
        console.log("Email: ", currentUser.email);
        // setUser(currentUser.email);

        if (currentUser) {
            firestore().collection('users')
                .doc(currentUser.uid)
                .get()
                .then((doc) => {
                    if (doc.exists) {
                        setUser(doc.data());
                        setName(doc.data().name);
                        setPhone(doc.data().phone);
                    }
                });
        }
        else {
            console.log("Sem dados")
        }
    }, []);


    const updateProfile = () => {
        firestore().collection('users')
            .doc(user.uid)
            .update({
                name: name,
                phone: phone
            }).then(() => {
                console.log('Profile updated!');
            }).catch((error) => {
                console.error('Error updating profile: ', error);
            });
    }

    const AdicionarProfile = () => {

        const currentUser = auth().currentUser;

        firestore().collection('users')
            .add({
                email: currentUser.email,
                name: name,
                phone: phone
            }).then(() => {
                console.log('Profile updated!');
            }).catch((error) => {
                console.error('Error updating profile: ', error);
            });
    }



    const getUserByEmail = (email) => {
        return firestore().collection('users')
            .where('email', '==', email)
            .get()
            .then((querySnapshot) => {
                if (querySnapshot.size > 0) {
                    const userDoc = querySnapshot.docs[0];
                    const userData = userDoc.data();
                    return {
                        id: userDoc.id,
                        email: userData.email,
                        name: userData.name,
                        phone: userData.phone,
                    };
                } else {
                    return null;
                }
            })
            .catch((error) => {
                console.error('Error getting user by email: ', error);
                throw error;
            });
    };

    function capturarDadosUsuario() {
        getUserByEmail('danilo@hotmail.com')
            .then((user) => {
                console.log('User encontrado: ', user);
                // fazer algo com os dados do usuário aqui
                setPhone(user.phone);
                setId(user.id);
                setName(user.name);
                setEmail(user.email);
            })
            .catch((error) => {
                console.error('Error getting user: ', error);
                // fazer algo em caso de erro aqui
            });
    }



    return (
        <View style={styles.container}>
            <Text style={{ marginBottom: 20, textAlign: "center" }}>Dados do seu Perfil: {'\n'} {user }</Text>
            <TextInput style={styles.input} value={id} editable={false} placeholder="ID"  />
            <TextInput style={styles.input} value={email} editable={false} placeholder="Email"  />
            <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Nome" />
            <TextInput style={styles.input} value={phone} onChangeText={setPhone} placeholder="Telefone" />
            <View style={{marginBottom: 20}}></View>
            <Button title="Salvar Dados" onPress={AdicionarProfile} />
            <View style={{marginBottom: 30}}></View>
            <Button title="Capturar Meus Dados" onPress={capturarDadosUsuario} />
        </View>
    );

}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10
    },

    input: {
        width: '90%',
        height: 45,
        borderWidth: 1,
        borderColor: '#ccc',
        marginVertical: 7,
        padding: 10,
        borderRadius: 10,
        fontSize: 15,
        marginBottom: 10
    },

});

