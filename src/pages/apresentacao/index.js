import React, { useState } from 'react';
import { Text, View, Image, ImageBackground, Animated } from 'react-native';
import style from './style'

export default function login(){
    
    let [altura, setAltura] = useState(new Animated.Value(300))
    let [largura, setLargura] = useState(new Animated.Value(0))

    Animated.timing(largura, {
        toValue: 150,
        duration: 1000
    }).start()
    
    return(
        <View style={style.container}>
            <Animated.View style={{  width: 300,
                            height: 300,
                            backgroundColor: '#6495ED',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                <Text style={{color: '#fff', fontSize: 20}}>Carregando...</Text>
                <Animated.View style={{borderBottomWidth:2, borderBottomColor: '#ffffff', width: largura}}></Animated.View>
            
            </Animated.View>
        </View>
    )
} 

