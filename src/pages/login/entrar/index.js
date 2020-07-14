import React, { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import style from './style'

// import FBLoginButton  from './FBLoginButton'

export default function login({ navigation }){
    let [login, setLogin] = useState('Email')
    let [senha, setSenha] = useState('Senha')

    
    return(
        <View style={style.container}>
            <Image source={require('../../../images/DietaTecLogo.png')} style={style.logo} />
            
            {/* AUMENTAR O TAMANHO DA LINHA ABAIXO DOS NOMES, COLOCAR SOMBRA, POR PRA FICAR AZUL APENAS QUANDO CLICADO, TROCAR O FORMULARIO PARA O QUE FOR ESCOLHIDO */}
            <View style={style.areaModoInicial}>
                <TouchableOpacity><Text style={style.textoEntrar}>Entrar</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('registrar')} ><Text style={style.textoRegistrar}>Registrar</Text></TouchableOpacity>
            </View>
            {/* <View style={style.areaLinhasModoInicial}>
                <View style={style.linhaEntrar}></View>
                <View style={style.linhaRegistrar}></View>
            </View> */}
            <TextInput value={login} style={style.inputLogin} />
            <TextInput value={senha} style={style.inputLogin} />
            <TouchableOpacity style={style.botaoEntrar}><Text>ENTRAR</Text></TouchableOpacity>
            <TouchableOpacity><Text style={{color: '#c1c1c1'}} >Esqueceu a senha?</Text></TouchableOpacity>
            <View style={style.linha}></View>
            <View style={style.areaRedesSociais}>
                <TouchableOpacity><Image source={require('../../../images/FacebookIcon.png')} style={style.iconeSocial} /></TouchableOpacity>
                <TouchableOpacity><Image source={require('../../../images/GoogleIcon.png')} style={style.iconeSocial} /></TouchableOpacity>
            </View>
        </View>
    )
} 
// home/paulo/Documentos/Codigos/Projetos/DietaTec/DietaTec/src/images/grayscale.jpeg
// src/images/grayscale.jpeg