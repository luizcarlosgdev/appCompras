import React, {useState} from 'react'
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'

import firestore from '@react-native-firebase/firestore'
import Feather from 'react-native-vector-icons/Feather'

export default function CadastroProdutos(){

    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [valor, setValor] = useState('')

    async function NovoProduto(){
        await firestore().collection('produtos').add({
            nome: nome,
            descricao: descricao,
            valor: valor
        })
        .then(() => {
            alert('Produto cadastrado!')
        })
        .catch((error) => {
            alert(error)
        })
    }

    return(
        <View style={styles.container}>
  
            <TextInput
            placeholder='Qual o nome do produto?'
            value={nome}
            onChangeText={(text) => setNome(text)}
            style={styles.inputNome}
            />

            <TextInput
            placeholder='Descrição do produto'
            value={descricao}
            onChangeText={(text) => setDescricao(text)}
            style={styles.inputNome}
            />
            
            <TextInput
            placeholder='Qual o valor do produto?'
            value={valor}
            onChangeText={(text) => setValor(text)}
            style={styles.inputNome}
            />

            <TouchableOpacity style={styles.areaImagem} onPress={() => alert('testando')}>
                <Feather name='image' color='#f1f1f1' size={35} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.cadastroProduto} onPress={() => NovoProduto()}>
                <Text style={styles.textCadastro}>Cadastrar</Text>
            </TouchableOpacity>

        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        margin: 10,
        marginTop: 20,
        alignItems: 'center',
    },
    inputNome:{
        width: '95%',
        backgroundColor: '#DDD',
        padding: 10,
        borderRadius: 5,
        marginBottom: 15,
        fontSize: 15,
    },
    areaImagem:{
        width: '95%',
        height: 150,
        backgroundColor: '#DDD',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40
    },
    cadastroProduto:{
        backgroundColor: '#418CFD',
        width: '90%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5   
    },
    textCadastro:{
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    }
})