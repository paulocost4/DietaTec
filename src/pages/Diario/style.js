import { StyleSheet} from 'react-native';

const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#1C1C1C',
        width: '100%',
        height: '100%'
        
    },
    areaNotificacao: {
        height: 25,
        width: '100%',
        backgroundColor: '#292929',
    },
    header: {
        flexDirection: 'row',
        justifyContent: "space-between",
        width: '90%'
    },
    headerText:{
        fontSize: 25,
        color: '#fff',
        marginTop: -11
    },
    areaGrafico:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        width: '90%'
    
    },
    text:{
        color: '#fff',
        fontSize: 12
    },
    areaLeft:{
        //position: 'absolute', 
        alignItems: 'center'
    },
    areaRight:{
       // position: 'absolute',
        alignItems: 'center'
    },
    areaResumo:{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: 15
    },
    areaCentroGrafico:{
        alignItems: "center",
        position: 'absolute'
    },
    areaMacronutrientes:{
        justifyContent: 'space-between',
        width: '95%',
        flexDirection: 'row',
        marginTop: 30
    },
    areaMacro:{
        alignItems: 'center',
        
    },
    textMacroMetas:{
        color: '#c1c1c1',
        //fontWeight: 'bold',
        fontSize: 12
    },
    textMacroConsumidas:{
        color: '#fff',
        //fontWeight: 'bold',
        fontSize: 12
    },
    barraProgresso:{
        backgroundColor: '#fff',
        height: 7,
        width: 100,
        borderRadius: 5,
        margin: 5
    },
    textLabelMacros:{
        color: '#fff',
        fontSize: 14
    },
    card:{
        flexDirection: 'row',
        width: '93%',
        height: 40,
        backgroundColor: '#121111',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 5,
        marginTop: 15
    },
    areaCards: {
        width: '100%',
        height: 40,
        alignItems: 'center',
        marginTop: 15
    },
    textCard: {
        fontSize: 12,
        color: '#fff',
        marginRight: 10
    },
    titleCard:{
        fontSize: 15,
        color: '#fff',
        marginLeft: 10,
    },
    horarioCard:{
        fontSize: 12,
        color: '#fff',
        marginRight: 10,
        position: 'absolute',
        marginLeft: 230
    },
    areaAlimentosConsumidos: {
        // flex: 1,
        // flexDirection: 'row',
        width: '93%',
        // height: 80,
        backgroundColor: '#292929',
        borderRadius: 5,
        marginTop: 20,
        paddingTop: 5,
        paddingBottom: 5

        
    },
    subCard:{

    }

})

export default style