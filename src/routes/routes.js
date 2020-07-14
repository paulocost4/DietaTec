import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();

// Pages
import apresentacao from '../pages/apresentacao'
import entrar from '../pages/login/entrar'
import registrar from '../pages/login/registrar'

export default function Routes (){

    return(        
        <NavigationContainer>
            <Stack.Navigator initialRouteName = {'entrar'} screenOptions = {{headerShown: false,}}>
                <Stack.Screen name='apresentaçao' component={apresentacao}/>
                <Stack.Screen options={{}} name='entrar' component={entrar}/>
                <Stack.Screen name='registrar' component={registrar} />
            </Stack.Navigator>
        </NavigationContainer>        
    )
}

