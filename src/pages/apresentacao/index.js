import React from 'react';
import { Text, View, Image, ImageBackground } from 'react-native';
import style from './style'

export default function login(){
    return(
        <ImageBackground source={ require('../../images/grayscale.jpeg') } style = {style.container}>
            <Text>Login haha ...</Text>
        </ImageBackground>
    )
} 
// home/paulo/Documentos/Codigos/Projetos/DietaTec/DietaTec/src/images/grayscale.jpeg
// src/images/grayscale.jpeg