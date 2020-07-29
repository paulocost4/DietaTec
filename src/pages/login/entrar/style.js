import { StyleSheet} from 'react-native';

const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: '#1C1C1C',
        width: '100%',
        height: '100%'
        
    },
    areaNotificacao: {
        height: 25,
        width: '100%',
        backgroundColor: '#292929',
    },
    inputLogin:{
        height: 40,
        width: '90%',
        margin: 10,
        //borderBottomWidth: 0.5,
        borderBottomColor: '#fff',
        color:'#fff',
        paddingLeft: 6
    },
    botaoEntrar:{
        height: 40, 
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6495ED',
        color: '#fff',
        fontWeight: 'bold',
        margin: 10
    },
    linha:{
        width: '90%',
        height: 1,
        borderBottomWidth: 0.5,
        borderColor: '#fff',
        marginTop: 50
    },
    areaRedesSociais:{
        // position: "absolute" ,
        flexDirection: 'row',
        height: 30,
        width: 120,
        justifyContent: 'center',
        marginTop: 30
    },
    iconeSocial:{
        height: 30,
        width: 30,
        margin: 10
    },
    areaModoInicial:{
        flexDirection: 'row',
        justifyContent: "space-between",
        width: 200,
        // marginTop: -160,
        // position: 'absolute',
        marginBottom: 30
    },
    logo:{
        width: 120,
        height: 50,
        marginBottom: 30,
        
    },
    linhaEntrar:{
        width: 90,
        height: 1,
        borderWidth: 1,
        backgroundColor: '#fff',
        marginTop: 5,
        backgroundColor: '#6495ED',
    },
    linhaRegistrar:{
        width: 90,
        height: 1,
        backgroundColor: '#fff',
        marginTop: 5,
        backgroundColor: '#6495ED',
    },
    areaLinhasModoInicial:{
        flexDirection: 'row',
        justifyContent: "space-between",
        width: 200
    },
    textoEntrar:{
        color: '#fff',
        fontSize: 17,
        borderBottomWidth: 2,
        borderBottomColor: '#6495ED',
       
    },
    textoRegistrar:{
        color: '#fff',
        fontSize: 17,
        // borderBottomWidth: 2,
        // borderBottomColor: '#6495ED',
       
    }
})

export default style