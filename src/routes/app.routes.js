import React from 'react'
import {View, Text} from 'react-native'

import CadastroProdutos from '../pages/CadastroProdutos'
import Home from '../pages/Home'

import {createNativeStackNavigator} from '@react-navigation/native-stack'

export default function AppRoutes(){

    const Stack = createNativeStackNavigator()

    return(
        <Stack.Navigator>
            <Stack.Screen
            name='Home'
            component={Home}
            />
            <Stack.Screen
            name='CadastroProdutos'
            component={CadastroProdutos}
            />
        </Stack.Navigator>
    )
}