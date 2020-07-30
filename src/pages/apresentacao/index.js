import React, { useState } from 'react';
import { Text, View, Image, TextInput, Animated , TouchableOpacity, ScrollView} from 'react-native';
import style from './style'

export default function login(){
    
    let [altura, setAltura] = useState(35)
    let [largura, setLargura] = useState(new Animated.Value(0))
    
    function MensagemApp(props){
        let {mensagem} = props

        let corpoMensagemPequeno = {
            backgroundColor: '#292929',
            width: mensagem < 35 ? null : '75%',
            height: 35,
            marginBottom: 15,
            marginLeft: 15,
            marginRight: 15,
            borderRadius: 5,
            justifyContent: 'center'
        }
        let corpoMensagemGrande = {
            backgroundColor: '#292929',
            width: mensagem < 35 ? null : '75%',
            height: 35+12,
            marginBottom: 15,
            marginLeft: 15,
            marginRight: 15,
            borderRadius: 5,
            justifyContent: 'center'
        }

        return(
            <View style={{width: '100%', flexDirection: 'row'}}>
                {/* Exibe uma view de tamanho diferente de acordo com o numero de caracteres da mensagem */}
                <View style={mensagem.length > 40 ? corpoMensagemGrande : corpoMensagemPequeno}>
                    <Text style={style.textMensagem}>{mensagem}</Text> 
                </View>
            </View>
        )
    }
    function MensagemUsuario(props){
        let {mensagem} = props

        let corpoMensagemPequeno = {
            backgroundColor: '#6495ED',
            // width: mensagem < 40 ? null : '80%',
            height: 35,
            marginBottom: 15,
            marginLeft: 15,
            marginRight: 15,
            borderRadius: 5,
            justifyContent: 'center'
        }
        let corpoMensagemGrande = {
            backgroundColor: '#6495ED',
            // width: mensagem < 40 ? null : '80%',
            height: 35+12,
            marginBottom: 15,
            marginLeft: 15,
            marginRight: 15,
            borderRadius: 5,
            justifyContent: 'center'
        }

        return(
            <View style={{width: '100%', flexDirection: 'row-reverse'}}>
                {/* Exibe uma view de tamanho diferente de acordo com o numero de caracteres da mensagem */}
                <View style={mensagem.length > 40 ? corpoMensagemGrande : corpoMensagemPequeno}>
                    <Text style={style.textMensagem}>{mensagem}</Text> 
                </View>
            </View>
        )
    }

    let usuario = {
        nome: '',
        idade: 0,
        peso: 0,
        sexo: 'm'
    }
    let mensagem = [
        {
            id: 0,
            texto: 'Olá, Estamos feliz de te ver por aqui',
            usuario: false
        },
        {
            id: 1,
            texto: 'Precisamos de sua altura para melhores resultados',
            usuario: false
        },
        {
            id: 2,
            texto: 'Digite a altura em centimetros (Ex: 183)',
            usuario: false
        },
        {
            id: 3,
            texto: '183 cm',
            usuario: true
        },
        {
            id: 4,
            texto: 'Agora precisamos do seu peso ',
            usuario: false
        },
        {
            id: 5,
            texto: 'Escreva em kg (Ex: 75.80)',
            usuario: false
        },
        {
            id: 6,
            texto: '64.56',
            usuario: true
        },
        {
            id: 7,
            texto: 'Quantos anos você tem?',
            usuario: false
        },
        {
            id: 8,
            texto: '21',
            usuario: true
        },
        {
            id: 7,
            texto: 'Qual o seu sexo? Precisamos disso para melhorar a analise',
            usuario: false
        },
        {
            id: 8,
            texto: 'Escreva masculino ou feminino',
            usuario: false
        },
        {
            id: 9,
            texto: 'Masculino',
            usuario: true
        },
        {
            id: 8,
            texto: 'Ótimo, ja podemos começar',
            usuario: false
        },
        {
            id: 8,
            texto: 'Vamos conhecer o diario...',
            usuario: false
        },
        
    ]

    // transformar isso em uma flat list
    let RenderizarMensagens = mensagem.map((value, index)=>{
        let {id, texto, usuario} = value 
        
        if(usuario){
            return(
                <MensagemUsuario mensagem={texto}/>
            )
        }
        else{
            return(
                <MensagemApp mensagem={texto}/>
            ) 
        }
        
    })
    return(
        <View style={style.container}>
                <View style = {style.areaNotificacao}></View>
                <View style={style.header}>
                    <Text style={style.TextHeaderTitle} >DietaTec</Text>
                </View>   
                {/* Area dedicada as mensagens  */}
                <View style={{height: '80%',   }}>  
                    <ScrollView contentContainerStyle={{justifyContent: 'flex-end', flex: 1}} style={{} }>
                        {/* <MensagemApp mensagem={'Olá, Estamos feliz de te ver por aqui'} />
                        <MensagemApp mensagem={'Precisamos de sua altura para melhores resultados'} />
                        <MensagemApp mensagem={'Digite a altura em centimetros (Ex: 183)'} /> */}
                        {RenderizarMensagens}
                    </ScrollView>

                    {/* <MensagemApp mensagem={'Ex: 183'} /> */}

                </View>

                <View style={{width: '100%',  alignItems: 'center'}}>

                    <TextInput style={style.inputText} 
                        selectionColor = '#6495ED'
                        textAlign={'left'}
                        placeholder={'Digite aqui...'}  

                    />
                    {/* <TouchableOpacity style={style.bottonStyle}><Text style={style.bottonText}>PROXIMO</Text></TouchableOpacity> */}
                </View>
        </View>
    )
} 

