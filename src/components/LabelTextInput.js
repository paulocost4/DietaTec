import React, { useState, useEffect } from 'react';
import {   
            View,
            Text,
            TextInput,
            Animated,
            StyleSheet
} from 'react-native';

export default function LabelTextInput(props){

    let { label, value } = props;
    let [xAnimado, setXAnimado] = useState( new Animated.Value(0))
    let [fonteAnimada, setFonteAnimada] = useState( new Animated.Value(20))
    let [corAnimado, setCorAnimado] = useState( new Animated.Value())
    let [isFocused, setIsFocused] = useState(0)
    

    const labelStyle = {
        position: 'absolute',
        left: 12,
        top: xAnimado,
        fontSize: fonteAnimada,
        color: !isFocused ? '#aaa' : '#fff',
      };
    const inputLogin = {
        height: 40,
        width: '90%',
        margin: 10,
        //borderBottomWidth: 0.5,
        borderBottomColor: '#fff',
        color:'#fff',
        paddingLeft: 6, 
        
    }

    function focus(isFocused, setIsfocused){
        isFocused ? setIsfocused(false) : setIsfocused(true)
    }


Animated.parallel([
    Animated.timing(xAnimado, {
        toValue: isFocused | value !=0 ? -5 : 18,
        duration: 200
    }),
    Animated.timing(fonteAnimada, {
        toValue: isFocused | value !=0 ? 15 : 13,
        duration: 200
    }),
    
]).start(()=> {})





    

    return(
        <View style={style.areaTextInput}>
            <Animated.Text style={labelStyle}>{label}</Animated.Text>
            <TextInput
                {...props}
                onFocus= {()=> focus(isFocused, setIsFocused)}
                onBlur= {()=> focus(isFocused, setIsFocused)}
                style={inputLogin}
                underlineColorAndroid =  {isFocused ? '#6495ED' : '#d3d3d3' }
                
              
            />

        </View>
    )
}

const style = StyleSheet.create({
    areaTextInput: {
        width: '100%', 
        justifyContent: 'center',
        marginLeft: 14
    }
})