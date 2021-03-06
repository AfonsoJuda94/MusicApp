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
import Chat from './Chat';


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
const MarcosSousa = [
    'Muito boa a aula.',
     'O professor realmente me deu uma boa base de viol??o.'

]
     
const TiagoSilva = [
    'Experi??ncia de aprendizado 100%. Recomendo a todos!',
    'Desde que apredi Sax, jazz virou minha segunda vida.',
    'O professor ?? muito bom.'
]
const MarinaBorges =[
    'A paix??o da professora pela m??sica me contagiou. Quero come??ar uma carreira tamb??m.',
    'O curso vale a pena. Nunca vi nada parecido.',
    'Meu filho est?? aprendendo teclado e est?? gostando muito. Recomendo a todos!'
]
const GeorgeCarlos =[
    'O professor ?? fera em viol??o. Muito gente boa tamb??m.',
    'Pre??o justo! ?? muito bom encotrar algu??m que democratize o aprendizado de m??sica.',
    'As aulas s??o muito boas. Estou come??ando a pegar jeito pra m??sica.'

]
const AndreMarcos = [
    'Um g??nio do Saxofone. O professor realmente entende de did??tica tamb??m.',
    'Muito boas as aulas. Recomendo a todos.',
    'Finalmente estou dando continuidade ao meu sonho de tocar bateria. Muito obrigado professor por tornar isso poss??vel!'
]

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
    AndreMarcos: 'Meu nome ?? Andre Marcos. Vou te ensinar como entrar no mundo da m??sica. Escolha o instrumento de seu interesse: posso lhe garantir uma base s??lida para qualquer um.',
    MarinaBorges: 'Sou Marina Borges. Desde pequena sempre fui apaixonada por m??sica. Irei compartilhar com voc?? o amor que tenho pela m??sica e te ensinar do b??sico ao avan??ado de teclado e viol??o.',
    GeorgeCarlos: 'Ol??, sou George Carlos. Tenho trabalhado como m??sico profissional nos ??ltimos 20 anos. Vou te ensinar viol??o com base na minha expri??ncia profissional. Aulas para todos os n??veis: dos hobbistas aos que querem se tornar m??sicos profissionais',
    MarcosSousa: 'Meu nome ?? Marcos Sousa e sou professor de viol??o h?? 10 anos. Se procura dominar o manejo desse intrumento, pode falar comigo.',
    TiagoSilva: 'Ol??, meu nome ?? Tiago Silva. Sou m??sico h?? 10 anos e quero te ajudar a evoluir nesse mundo art??stico. Dou aulas de viol??o, teclado e bateria',
}
//Informa????es sobre instrumentos
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
    MarcosSousa: 1,
    TiagoSilva: 1,
}
const saxofone = {
    AndreMarcos: 1,
    MarinaBorges: 0,
    GeorgeCarlos: 0,
    MarcosSousa: 1,
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

function Avaliacao(p){
    return(
        <View style ={{width:350, height:150,backgroundColor:'gray', borderRadius:30, margin: 20, position: 'relative', top:-200, flexDirection: 'row', alignItems: 'center' }}>
            <Image source={require('../assets/perfil.png')} style={{marginLeft:20,marginTop:10}} resizeMode= 'contain'/>
            <Text style = {{marginLeft: 10, marginTop:30, width:200}}>{p.texto}</Text>
        </View>

    )
}

export default function PerfilInstrutor({route}){
    const navigation = useNavigation();
    const [cor,setCor] = useState(null);
    

    
    return(
      <ScrollView >
          <View style = {styles.container}>
          <Image source={professores[route.params.valor]} style = {styles.img}
            resizeMode = 'cover'
          />
            <Text style= {{color: 'gray', paddingTop: 20,paddingBottom:15, fontWeight: 'bold'}}>Conhe??a</Text>
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
                <Text style = {{color: 'white', padding: 15, height:50, width:130}}>Avalia????es</Text>
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
                
                <View style ={{width: cor!=2|| cor!=3? null : 300, justifyContent: 'center',alignItems: 'center'}}>
                    {piano[route.params.valor] && cor ==2? <Btn_instrumento img = 'piano' nome = "PIANO"/>: null}
                    {violao[route.params.valor] && cor ==2? <Btn_instrumento img = 'violao' nome = "VIOL??O"/>: null}
                    {bateria[route.params.valor] && cor ==2? <Btn_instrumento img = 'bateria' nome = "BATERIA"/>: null}
                    {saxofone[route.params.valor] && cor ==2? <Btn_instrumento img = 'saxofone' nome = "SAXOFONE"/>: null}
                    {teclado[route.params.valor] && cor ==2? <Btn_instrumento img = 'teclado' nome = "TECLADO"/>: null}
                    { cor ==3 && route.params.valor=='MarcosSousa'?
                    MarcosSousa.map((b,d) => (<Avaliacao key = {b} texto={MarcosSousa[d]}/>))
                    :null}
                    { cor ==3 && route.params.valor=='TiagoSilva'?
                    TiagoSilva.map((b,d) => (<Avaliacao key = {b} texto={TiagoSilva[d]}/>))
                    :null}
                    { cor ==3 && route.params.valor=='MarinaBorges'?
                    MarinaBorges.map((b,d) => (<Avaliacao key = {b} texto={MarinaBorges[d]}/>))
                    :null}
                    { cor ==3 && route.params.valor=='GeorgeCarlos'?
                    GeorgeCarlos.map((b,d) => (<Avaliacao key = {b} texto={GeorgeCarlos[d]}/>))
                    :null}
                    { cor ==3 && route.params.valor=='AndreMarcos'?
                    AndreMarcos.map((b,d) => (<Avaliacao key = {b} texto={AndreMarcos[d]}/>))
                    :null}
                </View>
                
                <TouchableOpacity style = {styles.chat} onPress = {() => navigation.navigate('TelaChat',{prof: route.params.valor})}>
                <Image source={require('../assets/discurso.png')}/>  
                <Text style = {{color:'white', marginLeft:20}}>Fale com o mentor</Text>
            </TouchableOpacity>
            </View>
            

          </View>
      </ScrollView>
    )
  }

