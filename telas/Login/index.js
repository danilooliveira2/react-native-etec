import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RadioButton } from 'react-native-elements';

import auth from '@react-native-firebase/auth'

function TelaLoginSenha() {

    const navigation = useNavigation();

    function navegar(nomeTela) {
        console.log('Navegando...')
        navigation.navigate(nomeTela)
    }
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('danilo@hotmail.com');
    const [senha, setSenha] = useState('1&7ysad#Ujh');
    const [logado, setLogado] = useState(null);


    useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged(user => {
            if (user) {
                navigation.replace('Noticia'); // redireciona para tela inicial
            }
        });

        return unsubscribe; // limpa a inscrição quando a tela é desmontada
    }, []);


    //Realizar login
    function signIn_Logar() {

        auth().signInWithEmailAndPassword(email, senha)
            .then(userCredencial => {
                console.log('Usuário logado com sucesso: -> ', userCredencial);
                setLogado(true);
                navegar("Noticia");
            })
            .catch(error => {
                setLogado(false);
                errorMessage = VerifyErroCode(error.code);
                if (errorMessage == null) {
                    errorMessage = error;
                }

                console.error(errorMessage);
            });
    }



    //Realizar Cadastro
    function signUp_Cadastrar() {

        auth().createUserWithEmailAndPassword(email, senha)
            .then(userCredencial => {
                console.log('Usuário Registrado: ', userCredencial)
            })
            .catch(error => {
                errorMessage = VerifyErroCode(error.code);
                if (errorMessage == null) {
                    errorMessage = error;
                }

                console.error(errorMessage);
            });
    }

    async function handleCadastro() {
        // Aqui você pode chamar a função para salvar os dados no MongoDB
        signUp_Cadastrar();
        // cadastrarUsuario(nome, email, senha)
        // .then(data => console.log(data))
        // .catch(error => console.error(error));
        // cadastrarUsuario(nome, email, senha);


        console.log("Botao clicado");

    }

    return (


       

            <View style={styles.container}>

                <Text style={{ textAlign: 'center', lineHeight: 25, fontSize: 16 }}>Realize seu cadastro em nosso aplicativo. {'\n'}É grátis.</Text>
                <View style={{ marginBottom: 20 }}></View>
                {/* <TextInput
                style={styles.input}
                placeholder="Nome"
                value={nome}
                onChangeText={setNome}
            /> */}
                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry
                />

                <View style={{ marginBottom: 20 }}></View>

                <TouchableOpacity style={styles.button} onPress={handleCadastro}>
                    <Text style={styles.buttonText}>Realizar Cadastro</Text>
                </TouchableOpacity>

                <View style={{ marginBottom: 20 }}></View>

                <TouchableOpacity style={styles.button2} onPress={signIn_Logar}>
                    <Text style={styles.buttonText}>Realizar Login</Text>
                </TouchableOpacity>

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
        width: '80%',
        height: 45,
        borderWidth: 1,
        borderColor: '#ccc',
        marginVertical: 7,
        padding: 10,
        borderRadius: 10,
        fontSize: 15
    },

    button: {
        width: '80%',
        backgroundColor: '#1e368f',
        borderRadius: 7,
        marginVertical: 5,
        paddingVertical: 8
    },

    button2: {
        width: '80%',
        backgroundColor: '#1e5681',
        borderRadius: 7,
        marginVertical: 7,
        paddingVertical: 5
    },

    buttonText: {
        color: 'white',
        fontSize: 16,
        // fontWeight: 'bold',
        textAlign: 'center'

    },
    buttonText2: {
        color: 'gray',
        fontSize: 16,
        fontWeight: 'bold',
    },
});


//Lista de erros comuns
//https://gist.github.com/Albejr/a38cdeac247ef177986c99629680afb4

function VerifyErroCode(errorCode) {
    // fonte: https://firebase.google.com/docs/reference/js/firebase.auth.Auth
    // fonte: https://firebase.google.com/docs/auth/admin/errors?hl=pt-br
    switch (errorCode) {
        case 'auth/app-deleted':
            return 'O banco de dados não foi localizado.';
        case 'auth/expired-action-code':
            return 'O código da ação o ou link expirou.';
        case 'auth/invalid-action-code':
            return 'O código da ação é inválido. Isso pode acontecer se o código estiver malformado ou já tiver sido usado.';
        case 'auth/user-disabled':
            return 'O usuário correspondente à credencial fornecida foi desativado.';
        case 'auth/user-not-found':
            return 'O usuário não correponde à nenhuma credencial.';
        case 'auth/weak-password':
            return 'A senha é muito fraca.';
        case 'auth/email-already-in-use':
            return 'Já existi uma conta com o endereço de email fornecido.';
        case 'auth/invalid-email':
            return 'O endereço de e-mail não é válido.';
        case 'auth/operation-not-allowed':
            return 'O tipo de conta correspondente à esta credencial, ainda não encontra-se ativada.';
        case 'auth/account-exists-with-different-credential':
            return 'E-mail já associado a outra conta.';
        case 'auth/auth-domain-config-required':
            return 'A configuração para autenticação não foi fornecida.';
        case 'auth/credential-already-in-use':
            return 'Já existe uma conta para esta credencial.';
        case 'auth/operation-not-supported-in-this-environment':
            return 'Esta operação não é suportada no ambiente que está sendo executada. Verifique se deve ser http ou https.';
        case 'auth/timeout':
            return 'Excedido o tempo de resposta. O domínio pode não estar autorizado para realizar operações.';
        case 'auth/missing-android-pkg-name':
            return 'Deve ser fornecido um nome de pacote para instalação do aplicativo Android.';
        case 'auth/missing-continue-uri':
            return 'A próxima URL deve ser fornecida na solicitação.';
        case 'auth/missing-ios-bundle-id':
            return 'Deve ser fornecido um nome de pacote para instalação do aplicativo iOS.';
        case 'auth/invalid-continue-uri':
            return 'A próxima URL fornecida na solicitação é inválida.';
        case 'auth/unauthorized-continue-uri':
            return 'O domínio da próxima URL não está na lista de autorizações.';
        case 'auth/invalid-dynamic-link-domain':
            return 'O domínio de link dinâmico fornecido, não está autorizado ou configurado no projeto atual.';
        case 'auth/argument-error':
            return 'Verifique a configuração de link para o aplicativo.';
        case 'auth/invalid-persistence-type':
            return 'O tipo especificado para a persistência dos dados é inválido.';
        case 'auth/unsupported-persistence-type':
            return 'O ambiente atual não suportar o tipo especificado para persistência dos dados.';
        case 'auth/invalid-credential':
            return 'A credencial expirou ou está mal formada.';
        case 'auth/wrong-password':
            return 'Senha incorreta.';
        case 'auth/invalid-verification-code':
            return 'O código de verificação da credencial não é válido.';
        case 'auth/invalid-verification-id':
            return 'O ID de verificação da credencial não é válido.';
        case 'auth/custom-token-mismatch':
            return 'O token está diferente do padrão solicitado.';
        case 'auth/invalid-custom-token':
            return 'O token fornecido não é válido.';
        case 'auth/captcha-check-failed':
            return 'O token de resposta do reCAPTCHA não é válido, expirou ou o domínio não é permitido.';
        case 'auth/invalid-phone-number':
            return 'O número de telefone está em um formato inválido (padrão E.164).';
        case 'auth/missing-phone-number':
            return 'O número de telefone é requerido.';
        case 'auth/quota-exceeded':
            return 'A cota de SMS foi excedida.';
        case 'auth/cancelled-popup-request':
            return 'Somente uma solicitação de janela pop-up é permitida de uma só vez.';
        case 'auth/popup-blocked':
            return 'A janela pop-up foi bloqueado pelo navegador.';
        case 'auth/popup-closed-by-user':
            return 'A janela pop-up foi fechada pelo usuário sem concluir o login no provedor.';
        case 'auth/unauthorized-domain':
            return 'O domínio do aplicativo não está autorizado para realizar operações.';
        case 'auth/invalid-user-token':
            return 'O usuário atual não foi identificado.';
        case 'auth/user-token-expired':
            return 'O token do usuário atual expirou.';
        case 'auth/null-user':
            return 'O usuário atual é nulo.';
        case 'auth/app-not-authorized':
            return 'Aplicação não autorizada para autenticar com a chave informada.';
        case 'auth/invalid-api-key':
            return 'A chave da API fornecida é inválida.';
        case 'auth/network-request-failed':
            return 'Falha de conexão com a rede.';
        case 'auth/requires-recent-login':
            return 'O último horário de acesso do usuário não atende ao limite de segurança.';
        case 'auth/too-many-requests':
            return 'As solicitações foram bloqueadas devido a atividades incomuns. Tente novamente depois que algum tempo.';
        case 'auth/web-storage-unsupported':
            return 'O navegador não suporta armazenamento ou se o usuário desativou este recurso.';
        case 'auth/invalid-claims':
            return 'Os atributos de cadastro personalizado são inválidos.';
        case 'auth/claims-too-large':
            return 'O tamanho da requisição excede o tamanho máximo permitido de 1 Megabyte.';
        case 'auth/id-token-expired':
            return 'O token informado expirou.';
        case 'auth/id-token-revoked':
            return 'O token informado perdeu a validade.';
        case 'auth/invalid-argument':
            return 'Um argumento inválido foi fornecido a um método.';
        case 'auth/invalid-creation-time':
            return 'O horário da criação precisa ser uma data UTC válida.';
        case 'auth/invalid-disabled-field':
            return 'A propriedade para usuário desabilitado é inválida.';
        case 'auth/invalid-display-name':
            return 'O nome do usuário é inválido.';
        case 'auth/invalid-email-verified':
            return 'O e-mail é inválido.';
        case 'auth/invalid-hash-algorithm':
            return 'O algoritmo de HASH não é uma criptografia compatível.';
        case 'auth/invalid-hash-block-size':
            return 'O tamanho do bloco de HASH não é válido.';
        case 'auth/invalid-hash-derived-key-length':
            return 'O tamanho da chave derivada do HASH não é válido.';
        case 'auth/invalid-hash-key':
            return 'A chave de HASH precisa ter um buffer de byte válido.';
        case 'auth/invalid-hash-memory-cost':
            return 'O custo da memória HASH não é válido.';
        case 'auth/invalid-hash-parallelization':
            return 'O carregamento em paralelo do HASH não é válido.';
        case 'auth/invalid-hash-rounds':
            return 'O arredondamento de HASH não é válido.';
        case 'auth/invalid-hash-salt-separator':
            return 'O campo do separador de SALT do algoritmo de geração de HASH precisa ser um buffer de byte válido.';
        case 'auth/invalid-id-token':
            return 'O código do token informado não é válido.';
        case 'auth/invalid-last-sign-in-time':
            return 'O último horário de login precisa ser uma data UTC válida.';
        case 'auth/invalid-page-token':
            return 'A próxima URL fornecida na solicitação é inválida.';
        case 'auth/invalid-password':
            return 'A senha é inválida, precisa ter pelo menos 6 caracteres.';
        case 'auth/invalid-password-hash':
            return 'O HASH da senha não é válida.';
        case 'auth/invalid-password-salt':
            return 'O SALT da senha não é válido.';
        case 'auth/invalid-photo-url':
            return 'A URL da foto de usuário é inválido.';
        case 'auth/invalid-provider-id':
            return 'O identificador de provedor não é compatível.';
        case 'auth/invalid-session-cookie-duration':
            return 'A duração do COOKIE da sessão precisa ser um número válido em milissegundos, entre 5 minutos e 2 semanas.';
        case 'auth/invalid-uid':
            return 'O identificador fornecido deve ter no máximo 128 caracteres.';
        case 'auth/invalid-user-import':
            return 'O registro do usuário a ser importado não é válido.';
        case 'auth/invalid-provider-data':
            return 'O provedor de dados não é válido.';
        case 'auth/maximum-user-count-exceeded':
            return 'O número máximo permitido de usuários a serem importados foi excedido.';
        case 'auth/missing-hash-algorithm':
            return 'É necessário fornecer o algoritmo de geração de HASH e seus parâmetros para importar usuários.';
        case 'auth/missing-uid':
            return 'Um identificador é necessário para a operação atual.';
        case 'auth/reserved-claims':
            return 'Uma ou mais propriedades personalizadas fornecidas usaram palavras reservadas.';
        case 'auth/session-cookie-revoked':
            return 'O COOKIE da sessão perdeu a validade.';
        case 'auth/uid-alread-exists':
            return 'O indentificador fornecido já está em uso.';
        case 'auth/email-already-exists':
            return 'O e-mail fornecido já está em uso.';
        case 'auth/phone-number-already-exists':
            return 'O telefone fornecido já está em uso.';
        case 'auth/project-not-found':
            return 'Nenhum projeto foi encontrado.';
        case 'auth/insufficient-permission':
            return 'A credencial utilizada não tem permissão para acessar o recurso solicitado.';
        case 'auth/internal-error':
            return 'O servidor de autenticação encontrou um erro inesperado ao tentar processar a solicitação.';
        default:
            return null;
    }
}



export default TelaLoginSenha;