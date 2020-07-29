import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();

// Pages
import apresentacao from '../pages/apresentacao'
import entrar from '../pages/login/entrar'
import registrar from '../pages/login/registrar'
import diario from '../pages/Diario'


export default function Routes (){

    return(        
        <NavigationContainer>
            <Stack.Navigator initialRouteName = {'diario'} screenOptions = {{headerShown: false,}}>
                <Stack.Screen 
                    name='apresentaçao'
                    component={apresentacao}
                    // options={{  animationEnabled:true,
                    //             gestureDirection: 'horizontal',
                    //             animationTypeForReplace: "push"
                    //         }}
                />
                <Stack.Screen 
                    name='entrar' 
                    component={entrar}
                    options={{}} 
                />
                <Stack.Screen 
                    name='registrar' 
                    component={registrar}
                    options={{}} 
                />
                <Stack.Screen 
                    name='diario' 
                    component={diario}
                    options={{}} 
                />
            </Stack.Navigator>
        </NavigationContainer>        
    )
}
