import React, {useContext} from 'react'
import {View, Text} from 'react-native'

import { AuthContext } from '../context/auth'
import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'

export default function Routes(){
    
    const {signed} = useContext(AuthContext)

    return(
        signed ? <AppRoutes/> : <AuthRoutes/>
    )
        
}