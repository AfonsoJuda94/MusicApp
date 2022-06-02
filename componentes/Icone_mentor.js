import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {ImageBackground, Image} from 'react-native';
import  'react-native-screens';
import { Touchable, TouchableOpacity } from 'react-native';
import {useState} from 'react'
import PerfilInstrutor from '../componentes/PerfilInstrutor'
import Chat from './Chat';
export default function Icone_mentor(props){
    const navigation = useNavigation()
    const professores = {
        AndreMarcos: require('../assets/professores/image38.png'),
        MarinaBorges: require('../assets/professores/image39.png'),
        GeorgeCarlos: require('../assets/professores/image40.png'),
        MarcosSousa: require('../assets/professores/image41.png'),
        TiagoSilva: require('../assets/professores/Rectangle62.png'),

    }
    return(
        <View style = {styles.container} resizeMode = 'contain'>
                <TouchableOpacity onPress={() =>navigation.navigate("PerfilInstrutor",{valor: props.prof, val_aula: props.v_aula})}>
                    <Image source={professores[props.prof]} style = {styles.container&& {width: props.tamanho ==null?100:props.tamanho,height: props.tamanho==null?100:props.tamanho,borderRadius:50}} resizeMode ='contain'/>
                </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        borderRadius: 50,
        borderColor: 'red',
        marginRight: 20
    }
})