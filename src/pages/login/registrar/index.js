import React, { useState } from 'react';
import {
    Text, 
    View,
    Image,
    TextInput,
    TouchableOpacity ,
    } from 'react-native';
import style from './style'
import { CheckBox } from 'react-native-elements'
// import FBLoginButton  from './FBLoginButton'

export default function Registrar({ navigation }){
    let [login, setLogin] = useState('Email')
    let [senha, setSenha] = useState('Senha')
    let [confirmarSenha, setConfirmarSenha] = useState('Confirme a sua senha')
    let [check, setCheck] = useState(false)
    
    function marcarCheck(){
        if (check) {
            setCheck(false) 
        }
        else {
            setCheck(true)
        }
    }

    return(
        <View style={style.container}>
            <Image source={require('../../../images/DietaTecLogo.png')} style={style.logo} />
            
            {/* AUMENTAR O TAMANHO DA LINHA ABAIXO DOS NOMES, COLOCAR SOMBRA, POR PRA FICAR AZUL APENAS QUANDO CLICADO, TROCAR O FORMULARIO PARA O QUE FOR ESCOLHIDO */}
            <View style={style.areaModoInicial}>
                <TouchableOpacity onPress={()=> navigation.goBack() } ><Text style={style.textoEntrar}>Entrar</Text></TouchableOpacity>
                <TouchableOpacity><Text style={style.textoRegistrar}>Registrar</Text></TouchableOpacity>
            </View>
            <TextInput value={login} style={style.inputLogin} />
            <TextInput value={senha} style={style.inputLogin} />
            <TextInput value={confirmarSenha} style={style.inputLogin} />
            <TouchableOpacity style={style.botaoEntrar}><Text>ENTRAR</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=> marcarCheck() } style={style.areaCheck}>
                <CheckBox 
                    center
                    checked={check}
                    checkedColor = {'#6495ED'} 
                    onIconPress={()=>marcarCheck()}
                />
                <Text style={{color: '#c1c1c1'}} >Eu aceito as politicas de privacidade</Text>
            </TouchableOpacity>
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