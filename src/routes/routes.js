import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();

// Pages
import apresentacao from '../pages/apresentacao'
import entrar from '../pages/login/entrar'
import registrar from '../pages/login/registrar'
<<<<<<< HEAD
import diario from '../pages/Diario'

=======
>>>>>>> origin/master

export default function Routes (){

    return(        
        <NavigationContainer>
<<<<<<< HEAD
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
=======
            <Stack.Navigator initialRouteName = {'entrar'} screenOptions = {{headerShown: false,}}>
                <Stack.Screen name='apresentaçao' component={apresentacao}/>
                <Stack.Screen options={{}} name='entrar' component={entrar}/>
                <Stack.Screen name='registrar' component={registrar} />
>>>>>>> origin/master
            </Stack.Navigator>
        </NavigationContainer>        
    )
}
<<<<<<< HEAD
=======

>>>>>>> origin/master
