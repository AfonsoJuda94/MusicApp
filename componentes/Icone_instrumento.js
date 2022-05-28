import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {ImageBackground, Image} from 'react-native';
import  'react-native-screens';
import { Touchable, TouchableOpacity } from 'react-native';
import {useState} from 'react'


export default function Icone_instrumento(props){
    const imgs ={
        violao: require('../assets/Violao.png'),
        piano: require('../assets/Piano.png'),
        saxofone: require('../assets/Saxofone.png'),
        teclado: require('../assets/teclado.png'),
        bateria: require('../assets/bateria.png')
    }
    
    return(
        
        <View>
            <TouchableOpacity style = {styles.container}>
                <View style={styles.losango}/>
                <Image source={imgs[props.img]} />
                <Text style={styles.nome}>{props.nome}</Text>
                <Text>{props.n_professores} professores</Text>
                
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        borderRadius: 10,
        backgroundColor:  '#03fcd3',

        
        width: 130,
        height: 130,
        
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
    },
    losango:{
        width: 40,
        height: 35, 
        backgroundColor: 'yellow',
        position: 'relative',
        top: 35,
        textAlign: 'center',
        transform: [{rotate: '25deg'}],
    },
    nome: {
        fontSize: 15,
        fontWeight: 'bold'
    }
})