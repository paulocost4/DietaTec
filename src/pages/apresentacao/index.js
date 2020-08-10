import React, { useState, useEffect } from 'react';
import { Text, View, Image, TextInput, Animated , TouchableOpacity, ScrollView, StatusBar} from 'react-native';
import style from './style'
import Icon from 'react-native-vector-icons/FontAwesome';
import { FlatList } from 'react-native-gesture-handler';
// import ChatBot from 'react-native-chatbot'
export default function chat(){
    
    let [altura, setAltura] = useState(35)
    let [largura, setLargura] = useState(new Animated.Value(0))
    let opacidadeAnimada = new Animated.Value(0)
    let mensagemInput = ''
    
    // Animated.timing(opacidadeAnimada, {
    //     duration: 200,
    //     toValue: 1.0
    // }).start()

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
            justifyContent: 'center',
            opacity: 1
        }
        let corpoMensagemGrande = {
            backgroundColor: '#292929',
            width: mensagem < 35 ? null : '75%',
            height: 35+12,
            marginBottom: 15,
            marginLeft: 15,
            marginRight: 15,
            borderRadius: 5,
            justifyContent: 'center',
            opacity: 1
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

        // while(mensagem === ''){
        //     // setInterval(()=>void)
        //     return(0)
        // }

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
                id: '0',
                message: 'Olá, Estamos feliz de te ver por aqui',
                trigger: '1'
            },
            {
                id: '1',
                message: 'Precisamos de sua altura para melhores resultados',
                trigger: '2'
            },
            {
                id: '2',
                message: 'Digite a altura em centimetros (Ex: 183)',
                trigger: 'altura'
            },
            {
                id: 'altura',  
                user: true,
                trigger: '4'
            },
            {
                id: '4',
                message: 'Agora precisamos do seu peso ',
                trigger: '5'
            },
            {
                id: '5',
                message: 'Escreva em kg (Ex: 75.80)',
                trigger: 'peso'
            },
            {
                id: 'peso',
                user: true,
                trigger: '7'
            },
            {
                id: '7',
                message: 'Quantos anos você tem?',
                trigger: 'idade'
            },
            {
                id: 'idade',
                user: true,
                trigger: '9'
            },
            {
                id: '9',
                message: 'Qual o seu sexo? Precisamos disso para melhorar a analise',
                trigger: 'sexo'
            },
            {
                id: 'sexo',
                options:    [
                                { value: 'Masculino', label: 'Masculino', trigger: '12' },
                                { value: 'Feminino', label: 'Feminino', trigger: '12' },
                            ],
                trigger: '11'
            },
            {
                id: '12',
                message: 'Ótimo, ja podemos começar',
                trigger: '13'
            },
            {
                id: '13',
                texto: 'Vamos conhecer o diario...',
                end: true
            }   
    ]

    let vetMensagens = []
    let [mensagemRenderizada, setMensagemRenderizada] = useState([])

    function enviarMensagem(){
        let texto = mensagemInput
        // console.log(mensagem)
        mensagem.push([{ id: mensagem.length, texto: texto, usuario: true }])
        setMensagemRenderizada(mensagem)
    }

    // useEffect(()=>{
    //     mensagem.map((value, key)=>{
    //         value.map((itens, ey)=>{
    //             let vet = [itens]
    //             vetMensagens.push(vet)
    //             setTimeout(setMensagemRenderizada(vetMensagens),2000)
                
    //         })
    //     })
    //     // console.log(mensagem)
    // })
   
        
    let RenderizarMensagens = mensagemRenderizada.map((value, key)=>{
        
        return(
            value.map((data, key)=>{
                let {id, message, usuario} = data
                
                if (usuario){
                    return <MensagemUsuario mensagem={message}/>
                }
                else return  <MensagemApp mensagem={message}/>
            })
        )
    })
    

    return(
        <View style={style.container}>
                {/* <View style = {style.areaNotificacao}></View> */}
                <StatusBar backgroundColor='#d0d0d0' />
                <View style={style.header}>
                    <Text style={style.TextHeaderTitle} >DietaTec</Text>
                </View>   
                {/* Area dedicada as mensagens  */}
               
                {/* SA POHA TA CO PROBLEMA, VOU TER QUE CRIAR MEU PROPRIO CHATBOT FODASE */}
                {/* <ChatBot steps={mensagem} /> */}


                <View style={{flex: 1}}>  
                    <ScrollView 
                        // ref={ref => this.scrollView = ref}
                        // onContentSizeChange={ (contentWidth, contentHeight)=> this.scrollView.scrollToEnd({animated: true}) }
                        contentContainerStyle={{justifyContent: 'flex-end'}} 
                    >
                        
                        {RenderizarMensagens}
                        
                   </ScrollView>
                
                   

                </View>

                <View style={{width: '100%',  justifyContent: 'center', flexDirection: 'row'}}>
                    <TextInput style={style.inputText} 
                        // ref = {'textInput'}
                        selectionColor = '#6495ED'
                        textAlign={'left'}
                        placeholder={'Digite aqui...'}  
                        underlineColorAndroid = '#292929'
                        onChangeText = { (txt)=> mensagemInput = txt }
                        
                    />
                    <Icon name = 'send' color='#64a5Ef' size={20} style={style.iconeSend} 
                    onPress={ ()=> {
                        enviarMensagem()
                        // this.ref.TextInput.clear()
                    }} />
                    
                </View>
        </View>
    )
} 

