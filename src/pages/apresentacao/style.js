import { StyleSheet} from 'react-native';

const style = StyleSheet.create({
    container:{
        flex: 1,
        // alignItems: "center",
        // justifyContent: 'center',
        // paddingTop: 20,
        backgroundColor: '#000',
        width: '100%',
        height: '100%'   
    },
    bottonText:{
        fontSize: 15,
        color: '#fff',
        fontWeight: 'bold'
    },
    bottonStyle:{
        height: 40,
        width: 220,
        backgroundColor: '#6495ED',
        alignItems: 'center',
        justifyContent: "center",
        borderRadius: 5,
        marginTop: 15
    },
    header: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        height: 40,
        width: '100%',
        backgroundColor: '#6495ED'
    },
    TextHeaderTitle:{
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',

    },
    areaNotificacao: {
        height: 25,
        width: '100%',
        // backgroundColor: '#64a5Ef',
        backgroundColor: '#d0d0d0',

    },
    inputText:{
        height: 40,
        width: '90%',
        fontSize: 16,
        color: '#fff'
    },
    textMensagem: {
        color: '#fff',
        marginLeft: 10,
        marginRight: 10,
    },
    iconeSend:{
        // position: 'absolute',
        marginTop: 5, 
        
    }
    
})


export default style