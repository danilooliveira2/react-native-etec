import React, { useState } from 'react';

import {
    StyleSheet,
    ScrollView,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,
    TextInput,
    Image
} from 'react-native';
import auth from '@react-native-firebase/auth'
import { useNavigation } from '@react-navigation/native';
// Criando um componente para ser reutilizado
// const Separator = () => <View style={styles.separator} />;

//   const App = () => (
const PrimeiraTela = () => {


    const [valor, setValor] = useState('');
    const [valorExibicao, setValorExibicao] = useState('');

    const navigation = useNavigation();

    function navegar(nomeTela) {
        console.log('Navegando...')
        navigation.navigate(nomeTela)
    }

    const funcaoSubmit = () => {

        if (valor == '')
            Alert.alert('Operação não realizada', 'Você precisa digitar um texto primeiro!');
        else {
            setValorExibicao(valor);
            Alert.alert('Resultado', 'A pesquisa será feita com o seguinte valor: \n\n' + valor)
            setValor('')
        }
    };



    return (
        <ScrollView>
            {/* Estamos envolvendo o conteúdo que desejamos permitir
                que role dentro do componente ScrollView. */}



            <SafeAreaView style={styles.container}>
                {/* é usado para exibir conteúdo de forma segura 
            em dispositivos com displays "notch" ou bordas arredondadas.
            também pode ser usado para evitar que o conteúdo se sobreponha a 
            barras de navegação ou de status
             */}



                <View>

                    {/* View é um componente básico do React Native que é usado para 
            exibir conteúdo na tela do aplicativo. 
            É semelhante ao elemento DIV do HTML. */}




                    <Text style={styles.titulo}>
                        Este é uma exemplo de aplicativo criando na disciplina PAM II
                        {'\n'}   {'\n'}
                        Esta tela só pode ser acessada por usuários logados!
                    </Text>
                    <Button
                        title="Desconectar"
                        color="#4f7199"
                        onPress={() => {auth().signOut(); navegar("Inicio");} }
                    />
                </View>



                <View style={styles.separator} />

                {/* Notícia */}
                {/* <Separator /> */}
                <View>
                    <Text style={styles.titulo}>
                        ChatGPT vai mudar nosso mundo, diz Bill Gates
                    </Text>
                    <Image
                        // style={styles.imagem}
                        style={{ width: '100%', height: 170, borderRadius: 7 }}
                        source={{
                            uri: 'https://www.infomoney.com.br/wp-content/uploads/2019/06/bill-gates-5.jpg',
                        }}
                    />

                    <Text style={{ marginBottom: 10, marginTop: 5, marginHorizontal: 5, textAlign: 'justify' }} >
                        Desenvolvido pela OpenAI e apoiado pela Microsoft, foi classificado como o aplicativo de consumidor que mais cresce na história.
                        Chatbot pegou a internet de surpresa, com sua extensa capacidade de imitar a linguagem humana, produzir textos, responder perguntas, criar códigos e até passar em provas.
                        {'\n\n'}
                        Com a IA, o usuário pode usar o chatbot para estudar para provas e concursos, além de realizar inúmeras outras atividades.
                        Com a chegada do ChatGPT diversas empresas, como Baidu e Google, começaram a desenvolver suas próprias IAs rivais.
                    </Text>
                    <Button
                        style={{ borderRadius: 71 }}
                        title="Continuar leitura"
                        color="#4f08c9"
                        onPress={() => Alert.alert('Esta função ainda está em desenvolvimento')}
                    />
                </View>
                <View style={styles.separator} />

                <View>

                    <Text style={styles.titulo}>
                        Hogwarts Legacy é crackeado e jogadores vão a loucura
                    </Text>
                    <Image
                        // style={styles.imagem}
                        style={{ width: '100%', height: 220, borderRadius: 7 }}
                        source={{
                            uri: 'https://cdn2.unrealengine.com/everything-we-know-about-hogwarts-legacy-1920x1080-f68fc603c1ae.png',
                        }}
                    />

                    <Text style={{ marginBottom: 10, marginTop: 5, marginHorizontal: 5, textAlign: 'justify' }} >
                        O jogo era muito esperado, principalmente pelos fãs de Harry Potter. Mas quando falamos em games, principalmente os single-player, as empresas desenvolvedoras estão abertas a terem seus jogos pirateados, ou seja, crackeados.
                        {'\n\n'}
                        E com o jogo do mundo bruxo não seria diferente.
                        Em poucos os dias, o game já recebeu uma versão da famosa "Steam Verde" e já está rodando por aí. Entretanto, juntamente com isso, há uma versão do jogo repleta de malwares.
                        {'\n\n'}
                        Cibercriminosos estão se aproveitando do hype do jogo para disponiblizar torrents do game com muito,
                        mas assim, MUITOS vírus. Então, pense bem antes de comter um crime e ainda por cima ter seu PC comprometido.
                    </Text>
                    <Button
                        title="Continuar leitura"
                        color="#0a6b5b"
                        onPress={() => Alert.alert('Esta função ainda está em desenvolvimento')}
                    />
                </View>



                <View style={styles.separator} />
                <View style={{ marginTop: 10 }} />
                {/* <Separator /> */}
                <View>
                    <Text style={styles.titulo}>
                        Demonstração de Inputs
                        {'\n'}
                    </Text>

                    <Text>Digite a sua busca aqui neste campo:</Text>

               


                    <TextInput
                        style={styles.caixatexto}
                        onChangeText={setValor}
                        value={valor}
                        //  onChangeText={text => setValor(text)}
                        placeholder="Digite aqui..."
                        keyboardType="numeric"
                    />
                    <View style={{ marginTop: 20 }} />
                         {/* expressão condicional em JSX */}

                         {
                        valor.toUpperCase() === 'DANILO' ?
                            (
                                <View>
                                <Text style={{ color: '#ff0000', fontWeight: 'bold', fontSize: 20 }}> Você encontrou um easter egg! Mas não conte para ninguém, é segredo... </Text>
                                <View style={{ marginTop: 20 }} />
                                </View>
                            ) : null
                    }

                    <View style={styles.rodape}>
                        <Button
                            title="Cancelar"
                            onPress={() => Alert.alert('Operacao Cancelada')}
                        />
                        <Button
                            title="Buscar Agora"
                            onPress={funcaoSubmit}
                        />
                    </View>




                </View>


            </SafeAreaView>

        </ScrollView>
    )
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        //   justifyContent: 'center',
        marginHorizontal: 40,
    },

    titulo: {
        marginTop: 25,
        textAlign: 'center',
        marginVertical: 8,
        // fontWeight: `bold`,
        fontSize: 16,
        color: '#1c1c1c',
    },

    rodape: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
    },

    separator: {
        marginVertical: 15,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },



    caixatexto: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },

});

export default PrimeiraTela;