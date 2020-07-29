import React, { useState, useEffect } from 'react';
import {
    Text, 
    View,
    Image,
    TextInput,
    TouchableOpacity ,
    Animated
    } from 'react-native';
import style from './style'
import LabelTextInput from '../../../components/LabelTextInput'
import { CheckBox } from 'react-native-elements'

//import Animated from 'react-native-reanimated';
//import * as FontAwesome from "@expo/vector-icon"
// import FBLoginButton  from './FBLoginButton'

export default function Registrar({ navigation }){
    let [login, setLogin] = useState('')
    let [senha, setSenha] = useState('')
    let [confirmarSenha, setConfirmarSenha] = useState('')
    let [check, setCheck] = useState(false)
    
    let [isLoginFocused,setIsLoginFocused] = useState(false)
    let [isSenhaFocused,setIsSenhaFocused] = useState(false)
    let [isSenhaConfirmarFocused,setIsSenhaConfirmarFocused] = useState(false)
    
    //                           ^             
    //                           |              
    // informa aos respectivos states se o TextInput está focado ou não 
    function focus(isFocused, setIsfocused){
        isFocused ? setIsfocused(false) : setIsfocused(true)
    }

    function marcarCheck(){
        check ? setCheck(false)  : setCheck(true)   
    }

    

    return(
        <View style = {{flex: 1}}>
            <View style={style.areaNotificacao}></View>
            <View style={style.container}>
                <Image source={require('../../../images/DietaTecLogo.png')} style={style.logo} />
                
                {/* AUMENTAR O TAMANHO DA LINHA ABAIXO DOS NOMES, COLOCAR SOMBRA, POR PRA FICAR AZUL APENAS QUANDO CLICADO, TROCAR O FORMULARIO PARA O QUE FOR ESCOLHIDO */}
                <View style={style.areaModoInicial}>
                    <TouchableOpacity onPress={()=> navigation.goBack() } ><Text style={style.textoEntrar}>Entrar</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={style.textoRegistrar}>Registrar</Text></TouchableOpacity>
                </View>
                <LabelTextInput 
                    value={login}
                    label = {'Email'} 
                    //style={style.inputLogin} 
                    onChangeText={(email)=> setLogin(email) }                
                // placeholder={'Email'}
                    autoCompleteType={'email'}
                    keyboardType={'email-address'}
                    textContentType={'emailAddress'}
                    selectionColor = {'#6495ED'}

                    />
                <LabelTextInput 
                    value={senha}  
                // style={style.inputLogin}
                    onChangeText={(senha)=> setSenha(senha) }
                    label={'Senha'}
                    autoCompleteType={'password'}
                    keyboardType={'visible-password'}
                    textContentType={'password'}
                    selectionColor = {'#6495ED'}
                    secureTextEntry = {true} 
                    passwordRules = {true}
                    />
                <LabelTextInput 
                    value={confirmarSenha} 
                // style={style.inputLogin} 
                    onChangeText={(senha)=> setConfirmarSenha(senha) }
                    label={'Confirmar senha'}
                    autoCompleteType={'password'}
                    keyboardType={'visible-password'}
                    textContentType={'password'}
                    selectionColor = {'#6495ED'}
                    secureTextEntry = {true} 
                    passwordRules = {true}
                    />
                <TouchableOpacity onPress={()=> marcarCheck() } style={style.areaCheck}>
                    <CheckBox 
                        center
                        checked={check}
                        checkedColor = {'#6495ED'} 
                        onIconPress={()=>marcarCheck()}
                    />
                    <Text style={{color: '#c1c1c1'}} >Eu aceito as politicas de privacidade</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.botaoEntrar}><Text style={{fontWeight:'bold'}} >CONFIRMAR</Text></TouchableOpacity>
                {/* <View style={style.linha}></View>
                <View style={style.areaRedesSociais}>
                    <TouchableOpacity><Image source={require('../../../images/FacebookIcon.png')} style={style.iconeSocial} /></TouchableOpacity>
                    <TouchableOpacity><Image source={require('../../../images/GoogleIcon.png')} style={style.iconeSocial} /></TouchableOpacity>
                </View> */}
            </View>
        </View>
    )
} 



// home/paulo/Documentos/Codigos/Projetos/DietaTec/DietaTec/src/images/grayscale.jpeg
// src/images/grayscale.jpeg