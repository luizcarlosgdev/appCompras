import React, {useContext} from 'react'
import {View, Text, Button} from 'react-native'

import { AuthContext } from '../../context/auth'
import { useNavigation } from '@react-navigation/native'

export default function Home(){

    const {signOut} = useContext(AuthContext)
    const navigation = useNavigation()

    return(
        <View>
            <Text>Pagina Home</Text>
            <Button
            title='Avançar'
            onPress={() => navigation.navigate('CadastroProdutos')}
            />

            <Button
            title='Sair'
            onPress={() => signOut()}
            />
        </View>
    )
}