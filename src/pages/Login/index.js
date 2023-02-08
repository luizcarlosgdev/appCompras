import React, {useState, useContext} from 'react'
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native'

import { AuthContext } from '../../context/auth'

export default function Login(){

    const {signIn, signUp} = useContext(AuthContext)

    const [login, setLogin] = useState(true)
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function atualizandoLogin(){
        setLogin(!login)
        console.log(login)
    }

    async function logando(){

        await signIn(email, senha)
    }

    async function cadastrando(){
        
        await signUp(nome, email, senha)
    }

    if(login){
        return(
            <View style={styles.container}>
                <TextInput
                placeholder='seuemail@email.com'
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={styles.input}
                />
    
                <TextInput
                placeholder='sua senha'
                value={senha}
                onChangeText={(text) => setSenha(text)}
                style={styles.input}
                />
    
                <TouchableOpacity style={styles.buttonEntrar} onPress={() => logando()}>
                    <Text>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => atualizandoLogin()}>
                    <Text>Fazer cadastro</Text>
                </TouchableOpacity>
            </View>
        )
    }else{
        return(
            <View style={styles.container}>
                <TextInput
                placeholder='Seu nome completo'
                value={nome}
                onChangeText={(text) => setNome(text)}
                style={styles.input}
                />

                <TextInput
                placeholder='seuemail@email.com'
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={styles.input}
                />
    
                <TextInput
                placeholder='sua senha'
                value={senha}
                onChangeText={(text) => setSenha(text)}
                style={styles.input}
                />

                <TouchableOpacity style={styles.buttonEntrar} onPress={() => cadastrando()}>
                    <Text>Cadastrar</Text>
                </TouchableOpacity>
    
                <TouchableOpacity onPress={() => atualizandoLogin()}>
                    <Text>Já possuo uma conta</Text>
                </TouchableOpacity>
            </View>
        )
    }
    
}
const styles = StyleSheet.create({
    container:{
        margin: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },  
    input:{
        marginBottom: 10,
        backgroundColor: '#DDD',
        width: '90%',
        height: 45,
        borderRadius: 5
    },
    buttonEntrar:{
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        height: 45,
        backgroundColor: '#418CFD',
        borderRadius: 5,
        
    }
})