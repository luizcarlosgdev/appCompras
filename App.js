import React, {useContext} from 'react'
import { Text } from 'react-native'

import AuthProvider from './src/context/auth'
import Routes from './src/routes/index'
import { NavigationContainer } from '@react-navigation/native'

export default function App(){
  return(
    <NavigationContainer>
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    </NavigationContainer>
  )
}