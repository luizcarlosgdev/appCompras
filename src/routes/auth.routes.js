import React from 'react'
import {View, Text} from 'react-native'

import Login from '../pages/Login'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export default function AuthRoutes(){

    const Stack = createNativeStackNavigator()

    return(
        <Stack.Navigator>
            <Stack.Screen
            name='Login'
            component={Login}
            />
        </Stack.Navigator>
    )
}