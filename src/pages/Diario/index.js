//Sabendo que cada grama de carboidrato fornece 4kcal, cada grama de proteína fornece 4kcal e a grama da gordura fornece 9kcal
//       KG          CM      Y 
// (10×61,85)+(6,25×182)−(5×20)+5

// De forma genérica, você precisa ingerir 2g de proteínas por kg do corpo, 6g de carboidratos por kg de corpo e o que sobrar de gorduras.
import React, { useState, useEffect } from 'react';
import {
    Text, 
    View,
    Image,
    TextInput,
    TouchableOpacity ,
    Animated,
    AsyncStorage,
    ScrollView,
    FlatList
    } from 'react-native';
import style from './style'
import Icon from 'react-native-vector-icons/FontAwesome';
import { ProgressCircle } from 'react-native-svg-charts'



export default function Diario(){
   
    let [caloriasConsumidas, setCaloriasConsumidas] = useState(500)
    let [caloriasRestantes, setCaloriasRestantes] = useState(400)
    let [caloriasMeta, setCaloriasMeta] = useState(2500)
    let [progresso, setProgresso] = useState(0)
    
    // macronutrientes
    let [proteinaConsumida, setProteinaConsumida] = useState(0)
    let [proteinaMeta, setProteinaMeta] = useState(100)
    let [carboidratoConsumido, setCarboidratoConsumido] = useState(0)
    let [carboidratoMeta, setCarboidratoMeta] = useState(100)
    let [gorduraConsumida, setGorduraConsumida] = useState(0)
    let [gorduraMeta, setGorduraMeta] = useState(100)
    
    let textCaloriasConsumidas = {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15
    }
    let textCaloriasMeta = {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15
    }
    let textCaloriasRestantes = {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20
    }

    // Animação 
    
    let larguraAnimadaGordura = new Animated.Value(5)
    let larguraAnimadaCarboidrato = new Animated.Value(5)
    let larguraAnimadaProteina = new Animated.Value(5)
    let progressoGordura, progressoCarboidrato, progressoProteina
    let barraProgressoAnimadaProteina = {
        backgroundColor: '#6495ED',
        height: 7,
        width: larguraAnimadaProteina,
        borderRadius: 5,
        marginLeft: 5,
        marginTop: -12,
        position: 'absolute',
        justifyContent: 'flex-start'
    }
    let barraProgressoAnimadaCarboidrato = {
        backgroundColor: '#6495ED',
        height: 7,
        width: larguraAnimadaCarboidrato,
        borderRadius: 5,
        marginLeft: 5,
        marginTop: -12,
        position: 'absolute',
        justifyContent: 'flex-start'
    }
    let barraProgressoAnimadaGordura = {
        backgroundColor: '#6495ED',
        height: 7,
        width: larguraAnimadaGordura,
        borderRadius: 5,
        marginLeft: 5,
        marginTop: -12,
        position: 'absolute',
        justifyContent: 'flex-start'
    }

    let animarBarraCarboidrato = (value)=> { 
        Animated.timing(larguraAnimadaCarboidrato, {
            toValue: value,
            duration: 1000,
        }).start()
    }
    let animarBarraGordura = (value)=> {    
        Animated.timing(larguraAnimadaGordura, {
            toValue: value,
            duration: 1000,
        }).start()
    }   
    
    let animarBarraProteina = (value)=> {
        Animated.timing(larguraAnimadaProteina, {
            toValue: value,
            duration: 1000,
        }).start()
    }
    
//    let animateAll = ()=>{
//        Animated.parallel([
//            animarBarraCarboidrato(carboidratoConsumido/carboidratoMeta*100)
//        ])
//    } 
    
    // altera o progresso do grafico e as calorias restantes sempre que caloriasConsumidas for alterado
    useEffect((value)=>{
        value = caloriasConsumidas / caloriasMeta
        setCaloriasRestantes(caloriasMeta - caloriasConsumidas)
        setProgresso(value)
        console.log(`calorias COnsumidas: ${caloriasConsumidas}\nCalorias Meta: ${caloriasMeta}`)
    }, [caloriasConsumidas])
    
    useEffect((value)=>{
        value = proteinaConsumida/proteinaMeta*100;
       
        animarBarraProteina(value)
        console.log('Proteina alterada')
    }, [proteinaConsumida])

    useEffect((value)=>{
        value = carboidratoConsumido/carboidratoMeta*100
        animarBarraCarboidrato(value)
        console.log('Carboidrato alterado')

    }, [carboidratoConsumido])
    
    useEffect( (value)=>{
        value = gorduraConsumida/gorduraMeta*100
        animarBarraGordura(value)
        console.log('Gordura alterada')

    }, [gorduraConsumida])

    

    // useEffect((carb, prot, gord)=>{
    //     console.log('MUDOU A POHA TODA')
    //     animateAll()
    // }, [gorduraConsumida, proteinaConsumida, carboidratoConsumido])
    
    
    
   
    let VetRefeicoes = 
    [
        {
            title: 'Café da manhã',
            horario : '08:00',
            consumido: '0 g',
            alimentos: []
            // alimentos: 'ali'
        },
        {
            title: 'Almoço',
            horario : '12:00',
            consumido: '0 g',
            alimentos: [],
            // alimentos: 'ali'
        },
        {
            title: 'Lanche',
            horario : '16:00',
            consumido: '0 g',
            alimentos: [],
            // alimentos: 'alim'
        },
        {
            title: 'Janta',
            horario : '19:00',
            consumido: '0 g',
            alimentos: []
            // alimentos: 'alim'
        }
    ]
    let [refeicoes, setRefeicoes] = useState(VetRefeicoes)
    // VetRefeicoes.length

    // Cartão com resumo das refeiçoes
    let Cards = (props)=> {
        let {consumido, title, horario, alimentos} = props
        
        // A POHA DA PROPS NÃO ESTÁ RECEBENDO A PROPS*** ALIMENTOS ***
        return(
            <View style={style.areaCards}>
                <TouchableOpacity  style={style.card}>
                    <Text style={style.titleCard}>{title}</Text>
                    <Text style={style.horarioCard}>{horario}</Text>
                    <Text style={style.textCard}>{consumido}</Text>
                </TouchableOpacity>
                
                
            </View>
        )
    }

    // Cartão com os alimentos detalhados de cada refeição
    function SubCards(props){
        let {nome, calorias, consumido} = props.data
        return(
        // <Text style={style.text}>{nome}</Text>
            // <View style={style.areaCards}>
                <View onPress={()=>{}} style={style.subCard}>
                    <Text style={style.titleCard}>{nome}</Text>
                    <Text style={style.horarioCard}>{calorias}</Text>
                    {/* <Text style={style.textCard}>{consumido}</Text> */}
                </View>
            // </View>
        )
    }
    
    let RenderizarRefeicoes = refeicoes.map((value, index)=>{
        return(
            <View style={{width: '100%', alignItems: 'center'}}>
                <Cards title={value.title} horario={value.horario} consumido={value.consumido} /> 
                {value.alimentos.length===0 ? null : 
                    <View style={style.areaAlimentosConsumidos}>
                        <FlatList
                            data={value.alimentos}
                            renderItem={ ({item})=>  <SubCards data={item} />  }
                            keyExtractor = {({id})=>{ id }}
                            // ItemSeparatorComponent ={}
                        />
                    </View>
                }
            </View>
            )  
    })

    return(
        <View style= {{ flex: 1 }}>
            <View style = {style.areaNotificacao}></View>
            <ScrollView contentContainerStyle={{flex:1}} style={{  }}>

                <View style = {style.container}>
                
                        <View style={style.header}>
                            <Icon style={{ marginTop: 6 }} name={'arrow-left'} color={'#fff'} size={18} onPress= {()=>{}}/>
                            <View style={{alignItems: "center"}}>
                                <Text style = {style.headerText} >Diario</Text>
                                <Text style={{ marginTop: -6, color: '#c1c1c1' }}>Sábado 25/05</Text>
                            </View>
                            <Icon style={{ marginTop: 6 }} name={'arrow-right'} color={'#fff'} size={18} onPress= {()=>{}}/>
                        </View>
                    <View style={style.areaResumo}>
                        {/* Texto do meio do grafico */}
                        <View style={style.areaCentroGrafico}>     
                            <Text style={textCaloriasRestantes}>{caloriasRestantes} Kcal</Text>
                            <Text style={style.text}>Restantes</Text>
                        </View>
                        <View style={style.areaGrafico}>
                            <View style={style.areaLeft}>
                                <Text style={textCaloriasConsumidas}>{caloriasConsumidas} Kcal</Text>
                                <Text style={style.text} >Consumidas</Text>
                            </View>
                            <ProgressCircle style={ {height: 150, width: 150} } progress={progresso} progressColor={'#6495ED'} backgroundColor={'#fff'} animate  />
                            <View style={style.areaRight}>
                                <Text style={textCaloriasMeta} >{caloriasMeta} Kcal</Text>
                                <Text style={style.text} >Sua Meta</Text>
                            </View>
                        </View>
                    </View>
                    <View style={style.areaMacronutrientes}>
                        <View style={style.areaMacro}>
                            <Text style={style.textLabelMacros}>Proteina</Text>
                            <View style={style.barraProgresso}></View>
                            <View style={{justifyContent:"flex-start", width: '100%'}}>
                                <Animated.View style={barraProgressoAnimadaProteina}></Animated.View>
                            </View>
                            <View style={{flexDirection: 'row'}} >
                                <Text style={style.textMacroConsumidas}>{proteinaConsumida} g /</Text>
                                <Text style = {style.textMacroMetas}> {proteinaMeta} g</Text>
                            </View>
                        </View>
                        <View style={style.areaMacro}>
                            <Text style={style.textLabelMacros}>Carboidrato</Text>
                            <View style={style.barraProgresso}></View>
                            <View style={{justifyContent:"flex-start", width: '100%'}}>
                                <Animated.View style={barraProgressoAnimadaCarboidrato}></Animated.View>
                            </View>
                            
                            <TouchableOpacity onPress={()=>{
                                setProteinaConsumida(50)
                                setCarboidratoConsumido(78)
                                setGorduraConsumida(30)
                                // setCaloriasConsumidas(2300)
                                }} style={{flexDirection: 'row'}} >
                                <Text style={style.textMacroConsumidas}>{carboidratoConsumido} g /</Text>
                                <Text style = {style.textMacroMetas}> {carboidratoMeta} g</Text>
                            </TouchableOpacity>
                            
                            
                        </View>
                        <View style={style.areaMacro}>
                            <Text style={style.textLabelMacros}>Gordura</Text>
                            <View style={style.barraProgresso}></View>
                            <View style={{justifyContent:"flex-start", width: '100%'}}>
                                <Animated.View style={barraProgressoAnimadaGordura}></Animated.View>
                            </View>
                            <View style={{flexDirection: 'row'}} >
                                <Text style={style.textMacroConsumidas}>{gorduraConsumida} g /</Text>
                                <Text style = {style.textMacroMetas}> {gorduraMeta} g</Text>
                            </View>
                        </View>
                    </View>
            
                    <Cards title={'Agua'} consumido={'Consumido 0 ml'}/>
                    {RenderizarRefeicoes}

                </View>
            </ScrollView>
       </View>
    )
}