import React, { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import style from './style'
import LabelTextInpupt from '../../../components/LabelTextInput'
//import FBLoginButton  from '../redesSociais/FBLoginButton'

export default function login({ navigation }){
    let [login, setLogin] = useState('')
    let [senha, setSenha] = useState('')

    let [isLoginFocused,setIsLoginFocused] = useState(false)
    let [isSenhaFocused,setIsSenhaFocused] = useState(false)
    
    //                           ^             
    //                           |              
    // informa aos respectivos states se o TextInput está focado ou não 
    function focus(isFocused, setIsfocused){
        isFocused ? setIsfocused(false) : setIsfocused(true)
    }


    return(
        <View style = {{flex: 1}}>
            <View style={style.areaNotificacao}></View>
            <View style={style.container}>
                <Image source={require('../../../images/DietaTecLogo.png')} style={style.logo} />
                
                {/* AUMENTAR O TAMANHO DA LINHA ABAIXO DOS NOMES, COLOCAR SOMBRA, POR PRA FICAR AZUL APENAS QUANDO CLICADO, TROCAR O FORMULARIO PARA O QUE FOR ESCOLHIDO */}
                <View style={style.areaModoInicial}>
                    <TouchableOpacity><Text style={style.textoEntrar}>Entrar</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('registrar')} ><Text style={style.textoRegistrar}>Registrar</Text></TouchableOpacity>
                </View>
                
                <LabelTextInpupt //Login
                    value={login} 
                    onChangeText={(email)=> setLogin(email) }
                    selectionColor={'#6495ED'}
                    label={'Email'}
                    keyboardType={'email-address'}
                    textContentType={'emailAddress'}
                    onFocus= {()=> focus(isLoginFocused, setIsLoginFocused)}
                    onBlur= {()=> focus(isLoginFocused, setIsLoginFocused)}
                />
                <LabelTextInpupt 
                    value = {senha}
                    onChangeText={(senha)=> setSenha(senha) }
                    label={'Senha'}
                    autoCompleteType={'password'}
                    keyboardType={'visible-password'}
                    textContentType={'password'}
                    secureTextEntry = {true} 
                    passwordRules = {true}
                    onFocus= {()=> focus(isSenhaFocused, setIsSenhaFocused)}
                    onBlur= {()=> focus(isSenhaFocused, setIsSenhaFocused)}
                />
                <TouchableOpacity style={style.botaoEntrar}>
                    <Text style={{color: '#fff', fontWeight: "bold"}} >ENTRAR</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{color: '#c1c1c1'}} >Esqueceu a senha?</Text>
                </TouchableOpacity>
                <View style={style.linha}></View>
                <View style={style.areaRedesSociais}>
                    <TouchableOpacity>
                        <Image source={require('../../../images/FacebookIcon.png')} style={style.iconeSocial} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../../images/GoogleIcon.png')} style={style.iconeSocial} />
                    </TouchableOpacity>
                </View>               
            <Text style={{color: '#ff000000', fontWeight: "bold"}} >Login:  {isLoginFocused ? '#6495ED' : '#d3d3d3'}</Text>
            
            </View>
        </View>
    )
} 
// home/paulo/Documentos/Codigos/Projetos/DietaTec/DietaTec/src/images/grayscale.jpeg
// src/images/grayscale.jpeg