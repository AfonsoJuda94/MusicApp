import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {ImageBackground, Image} from 'react-native';
import  'react-native-screens';
import { Touchable, TouchableOpacity } from 'react-native';
import {useState} from 'react'
import { FullWindowOverlay } from 'react-native-screens';
import Icone_instrumento from './Icone_instrumento'
import { render } from 'react-dom';
import { Button } from 'react-native-web';


const styles = StyleSheet.create({
    container: {
        color:'white',
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 30
    },
    img:{
        height: 300,width: 400, borderBottomLeftRadius: 40, borderBottomRightRadius: 40,
        position: 'relative', right: 25,
    },
    conteudo: {
        flex:2,
        backgroundColor: '#111111',
        width: 400,
        position: 'relative',
        right: 20
    },
    losango:{
        width: 60,
        height: 40, 
        backgroundColor: '#15ddf7',
        position: 'relative',
        top: 30,
        left: 20,
        textAlign: 'center',
        transform: [{rotate: '25deg'}],

    },
    btn: {
        width: 300,
        height:150,
        backgroundColor: '#ffd701',
        borderRadius: 15,
        marginTop:30 
    },
    nome: {
        position: 'relative',
        top: -20,
        left: 20,
        fontSize: 16,
        fontWeight: 'bold'
    },
    chat: {
        width: 300,
        height:50,
        borderColor: 'gray',
        borderWidth:2,
        borderRadius:15,
        position: 'relative',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 50,
        flexDirection: 'row'
    }
})
const imgs ={
    violao: require('../assets/Violao.png'),
    piano: require('../assets/Piano.png'),
    saxofone: require('../assets/Saxofone.png'),
    teclado: require('../assets/teclado.png'),
    bateria: require('../assets/bateria.png')
}
const professores = {
    AndreMarcos: require('../assets/professores/image38.png'),
    MarinaBorges: require('../assets/professores/image39.png'),
    GeorgeCarlos: require('../assets/professores/image40.png'),
    MarcosSousa: require('../assets/professores/image41.png'),
    TiagoSilva: require('../assets/professores/Rectangle62.png'),

}
const nomes = {
    AndreMarcos: 'Andre Marcos',
    MarinaBorges: 'Marina Borges',
    GeorgeCarlos: 'George Carlos',
    MarcosSousa: 'Marcos Sousa',
    TiagoSilva: 'Tiago Silva',

}
const sobre_professores = {
    AndreMarcos: 'Meu nome é Andre Marcos. Vou te ensinar como entrar no mundo da música. Escolha o instrumento de seu interesse: posso lhe garantir uma base sólida para qualquer um.',
    MarinaBorges: 'Sou Marina Borges. Desde pequena sempre fui apaixonada por música. Irei compartilhar com você o amor que tenho pela música e te ensinar do básico ao avançado de teclado e violão.',
    GeorgeCarlos: 'Olá, sou George Carlos. Tenho trabalhado como músico profissional nos últimos 20 anos. Vou te ensinar violão com base na minha expriência profissional. Aulas para todos os níveis: dos hobbistas aos que querem se tornar músicos profissionais',
    MarcosSousa: 'Meu nome é Marcos Sousa e sou professor de violão há 10 anos. Se procura dominar o manejo desse intrumento, pode falar comigo.',
    TiagoSilva: 'Olá, meu nome é Tiago Silva. Sou músico há 10 anos e quero te ajudar a evoluir nesse mundo artístico. Dou aulas de violão, teclado e bateria',
}
//Informações sobre instrumentos
const piano = {
    AndreMarcos: 1,
    MarinaBorges: 0,
    GeorgeCarlos: 0,
    MarcosSousa: 0,
    TiagoSilva: 0,
}
const teclado = {
    AndreMarcos: 1,
    MarinaBorges: 1,
    GeorgeCarlos: 0,
    MarcosSousa: 0,
    TiagoSilva: 1,
}
const violao = {
    AndreMarcos: 1,
    MarinaBorges: 1,
    GeorgeCarlos: 1,
    MarcosSousa: 0,
    TiagoSilva: 1,
}
const saxofone = {
    AndreMarcos: 1,
    MarinaBorges: 0,
    GeorgeCarlos: 0,
    MarcosSousa: 0,
    TiagoSilva: 0,
}
const bateria = {
    AndreMarcos: 1,
    MarinaBorges: 0,
    GeorgeCarlos: 0,
    MarcosSousa: 0,
    TiagoSilva: 1,
}

function Btn_instrumento(props){
    return(
        <TouchableOpacity style = {styles.btn}>
                <View style = {styles.losango} />
                <Image source={imgs[props.img]} resizeMethod = 'scale' style = {{
                    width: 50, height:60, position: 'relative', left: 30, top: -25
                    }}/>
                
                <Text style={styles.nome}>{props.nome}</Text>
                <View style = {{flexDirection: 'row', position: 'relative', left:170, bottom:20}}>
                    <Text>Agendar aula</Text>
                    <Image source={require('../assets/seta.png')} style ={{width:32, position: 'relative', bottom: 13}} resizeMode = 'contain'/>
                </View>
                
        </TouchableOpacity>
    )
}

export default function PerfilInstrutor({route}){
    const [cor,setCor] = useState(null);
    return(
      <ScrollView >
          <View style = {styles.container}>
          <Image source={professores[route.params.valor]} style = {styles.img}
            resizeMode = 'cover'
          />
            <Text style= {{color: 'gray', paddingTop: 20,paddingBottom:15, fontWeight: 'bold'}}>Conheça</Text>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 25}}>{nomes[route.params.valor]}</Text>
            <View style = {{flexDirection: 'row', position: 'relative', right: 18}}>
                <TouchableOpacity onPress={
                    () =>{ setCor(1)}
                } 
                style={{borderColor: cor === 1? '#15DDF7': null,  borderBottomWidth: 3}}
                >
                    <Text style = {{color: 'white', padding: 15, height:50, width:130}}>Sobre</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={
                    () =>{ setCor(2)}
                } 
                style={{borderColor: cor === 2? '#15DDF7': null,  borderBottomWidth: 3}}
                >
                <Text style = {{color: 'white', padding: 15, height:50, width:130}}>Instrumentos</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={
                        () =>{ setCor(3)}
                    } 
                    style={{borderColor: cor === 3? '#15DDF7': null, borderBottomWidth: 3}}
                >
                <Text style = {{color: 'white', padding: 15, height:50, width:130}}>Avaliações</Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.conteudo}>
                <Text style = {{color: '#fff', textAlign: 'center',marginTop: 30, marginLeft: 30, width:335, textAlign: 'justify', fontSize: 16,alignItems: 'center'
                ,height: cor ==1 || cor !=2? 200:null
            }}>
                    {
                    cor==1?
                    sobre_professores[route.params.valor] : null
                    }
                    
                </Text>
                {cor==1? 
                <View style = {{ position:'relative', bottom: 50,left:30}}>
                    <Text style = {{color:'white'}}>
                        Valor da hora/aula:
                    </Text>
                    <Text style={{color:'white', fontSize: 50}}>{route.params.val_aula} R$</Text>
                </View>
                :null}
                
                <View style ={{width: cor!=2? null : 400, justifyContent: 'center',alignItems: 'center'}}>
                    {piano[route.params.valor] && cor ==2? <Btn_instrumento img = 'piano' nome = "PIANO"/>: null}
                    {violao[route.params.valor] && cor ==2? <Btn_instrumento img = 'violao' nome = "VIOLÃO"/>: null}
                    {bateria[route.params.valor] && cor ==2? <Btn_instrumento img = 'bateria' nome = "BATERIA"/>: null}
                    {saxofone[route.params.valor] && cor ==2? <Btn_instrumento img = 'saxofone' nome = "SAXOFONE"/>: null}
                    {teclado[route.params.valor] && cor ==2? <Btn_instrumento img = 'teclado' nome = "TECLADO"/>: null}

                </View>
                <TouchableOpacity style = {styles.chat}>
                <Image source={require('../assets/discurso.png')}/>  
                <Text style = {{color:'white', marginLeft:20}}>Fale com o mentor</Text>
            </TouchableOpacity>
            </View>
            

          </View>
      </ScrollView>
    )
  }

