import React, {createContext, useState} from 'react'

import { useNavigation } from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'

export const AuthContext = createContext({})

function AuthProvider({children}){

    const [user, setUser] = useState(null)

    async function signUp(nome, email, senha){
        await auth().createUserWithEmailAndPassword(email, senha)
        .then( async (value) => {
            let uid = value.user.uid
            await firestore().collection('usuarios').doc(value.user.uid).set({
                nome: nome,
                dataCadastro: new Date()
            })

            setUser(uid)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    async function signIn(email, senha){
        await auth().signInWithEmailAndPassword(email, senha)
        .then((value) => {
            setUser(value.user.uid)
        })
        .catch((error) => {
            console.log(error)
        })
    }


    async function signOut(){
        await auth().signOut()
        .then(() => {
            setUser(null)
        })
        .catch((error) => {
            console.log('Erro ao desconectar usuário...', error)
        })
    }

    return(
        <AuthContext.Provider 
            value={{signed: !!user, signIn, signUp, signOut}}
        >
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider