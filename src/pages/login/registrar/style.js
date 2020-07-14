import { StyleSheet} from 'react-native';

const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        paddingTop: 20,
        backgroundColor: '#1C1C1C',
        width: '100%',
        height: '100%'
        
    },
    texto:{
        color: '#fff',
        fontSize: 30,
        fontFamily: 'monospace',
        fontWeight: 'bold'
    },
    inputLogin:{
        height: 40,
        width: '80%',
        margin: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: '#fff',
        color:'#fff'
    },
    botaoEntrar:{
        height: 40, 
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6495ED',
        color: '#fff',
        fontWeight: 'bold',
        margin: 10
    },
    linha:{
        width: '80%',
        height: 1,
        border: 1,
        backgroundColor: '#fff',
        marginTop: 30
    },
    areaRedesSociais:{
        position: "absolute" ,
        flexDirection: 'row',
        height: 30,
        width: 120,
        justifyContent: 'center',
        marginTop: 215
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
        marginTop: -160,
        position: 'absolute',
    },
    linhaEntrar:{
        width: 90,
        height: 1,
        border: 1,
        backgroundColor: '#fff',
        marginTop: 5,
        backgroundColor: '#6495ED',
    },
    linhaRegistrar:{
        width: 90,
        height: 1,
        border: 1,
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
        // borderBottomWidth: 2,
        // borderBottomColor: '#6495ED',
       
    },
    textoRegistrar:{
        color: '#fff',
        fontSize: 17,
        borderBottomWidth: 2,
        borderBottomColor: '#6495ED',
       
    },
    logo:{
        width: 120,
        height: 50,
        position: 'absolute',
        marginTop: -220
    },
    check:{
        // NÃO ESTÁ SENDO USADO!
        height: 10,
        width: 10,
        borderWidth: 0.5,
        borderColor: '#fff',
        marginRight: 5,
        backgroundColor: ''
    },
    areaCheck: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        
    }
})

export default style