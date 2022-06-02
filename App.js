import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,ScrollView, View, TextInput, Tab, but} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {ImageBackground, Image} from 'react-native';
import  'react-native-screens';
import { Touchable, TouchableOpacity } from 'react-native';
import Icone_instrumento from './componentes/Icone_instrumento';
import Icone_mentor from './componentes/Icone_mentor'
import PerfilInstrutor from './componentes/PerfilInstrutor';
import { useEffect, useState } from 'react';
import Chat from './componentes/Chat';
import Map from './componentes/Map'

//import Chat from './componentes/Chat';
//======================= Inicio das Telas ======================================
function TelaPrincipal({navigation}){
  const Tab  = createBottomTabNavigator();
  const [select,setSelect] = useState(null);
  return(
    <ScrollView>
      <View style = {styles.Principal}>
      <View style={{marginTop:100, marginLeft:30}}>
        <Image source={require('./assets/user_ex.png')} style = {{borderRadius:10, width:60, height:60}}/>
        <Text style={{color: 'white', position: 'relative',left:70,bottom:55,fontSize:20, fontWeight: 'bold'}}>Olá, Usuário</Text>
        <Text style={{color: 'white', position: 'relative', left:70, bottom:50, fontSize:14}}>Qual instrumento deseja estudar?</Text>
      </View>
      <TextInput style = {{padding:12, height:50, width:300,borderWidth: 2,
        borderRadius:10,color: 'white', fontSize:14, marginTop:0, marginLeft:80
        }} onChange = {console.log("funciona")} placeholder="Busque por instrumento"
        placeholderTextColor="#fff"
        />
      <Image source={require('./assets/Lupa.png')} style={{position:'absolute',top:218,left:40, resizeMode: 'contain', height: 30}}/>
      <ScrollView 
      contentContainerStyle = {{flexDirection: 'row', margin:20}}  horizontal = {true}
      style = {{}}>
        <Icone_instrumento nome = "VIOLAO" img = "violao" n_professores = '15'/>
        <Icone_instrumento nome = "PIANO" img = "piano" n_professores = '25'/>
        <Icone_instrumento nome = 'SAXOFONE' img = "saxofone" n_professores = '9'/>
        <Icone_instrumento nome = "TECLADO" img = 'teclado' n_professores = '12'/>
        <Icone_instrumento nome = "BATERIA" img = 'bateria' n_professores = '12'/>
      </ScrollView>

      <Text style = {{color: 'white', position: 'relative', left: 30, fontSize: 15,margin: 10}}>Mentores populares</Text>
      <ScrollView contentContainerStyle = {{flexDirection: 'row'}} horizontal = {true}
      style = {{margin:10}}
      >
          <Icone_mentor prof = 'AndreMarcos' v_aula = '35'/>
          <Icone_mentor prof = 'MarinaBorges' v_aula = '30'/>
          <Icone_mentor prof = 'GeorgeCarlos' v_aula = '45'/>
          <Icone_mentor prof = 'MarcosSousa' v_aula = '55'/>
          <Icone_mentor prof = 'TiagoSilva' v_aula = '50'/>
      </ScrollView>
      <View style = {{}}>
        <Text style={{color:'white', margin:30, marginBottom:10}}>Próxima aula</Text>
        <TouchableOpacity style = {{}}><Text style={{color:'white', position: 'relative', bottom:30, left: 320}}>ver todas</Text></TouchableOpacity>
        <View style = {{
          width: 300,
          height: 210,
          backgroundColor: 'yellow',
          marginLeft:50,
          borderRadius: 30,
        }}>
          <Image source={require('./assets/camera.png')} style={{position: 'relative', left:140}}/>
          <Text style = {{borderRadius: 10, borderColor: 'black',borderWidth: 2, width: 100, padding: 5, position: 'relative', bottom: 110, left: 20}}>Presencial</Text>
          <Text style = {{position: 'relative', left: 170, bottom: 135}}>Data_da_aula</Text>
          <Text style = {{
            fontWeight: 'bold',
            fontSize: 20,
            bottom: 120,
            left: 25
            }}>Aula de instrumento</Text>
          <Text
            style = {{position: 'relative', bottom: 110, left:25, fontSize: 14}}
          >Professor</Text>
          <TouchableOpacity style = {{ borderRadius: 20, backgroundColor: '#03fcd3', height: 50, width: 250, justifyContent: 'center', alignItems: 'center', flexDirection: 'row',
          position: 'relative',bottom:100, left:25
        }}
          onPress={()=> navigation.navigate('Map')}
        >
            <Image source={require('./assets/mapa.png')} style = {{resizeMode: 'contain', width: 50}}/>
            <Text>Ver na localização</Text>
          </TouchableOpacity>

        </View>

      </View>
      <View style = {styles.barra_navegacao}>
            <TouchableOpacity style = {{alignItems:'center',padding:10,height:70, width:120,borderWidth:2, borderBottomColor:select==1? '#15ddf7':null}} onPress ={()=>{setSelect(1);navigation.navigate('TelaPrincipal')}}>
              <Image source={require('./assets/Path.png')}/>
              <Text style={{color: 'white'}}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {{alignItems:'center',padding:10,height:70, width:120,borderWidth:2, borderBottomColor:select==2? '#15ddf7':null}} onPress ={()=>{setSelect(2)}}>
              <Image source={require('./assets/calendario.png')} resizeMode ='contain'  style={{width:35, height: 25}}/>
              <Text style={{color: 'white'}}>Agenda</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={{alignItems:'center',padding:10,height:70, width:120,borderWidth:3, borderBottomColor:select==3? '#15ddf7':null}} 
            onPress ={()=>{setSelect(3); navigation.navigate('SelectChat')}}>
              <Image source={require('./assets/discurso.png')} resizeMode = 'contain' style ={{height:25}}/>
              <Text style={{color: 'white'}}>Chat</Text>
            </TouchableOpacity>
            
      </View>
    </View>
    </ScrollView>
  )
}
function SelectChat({navigation}){
  const [select,setSelect] = useState(0)
  return(
    <ScrollView>
      <View style = {{justifyContent: 'flex-start', flex:1, alignItems: 'center', backgroundColor: 'black',paddingTop: 50, paddingBottom: 0 }}>
      
      <TouchableOpacity style = {styles.chat_instrutor}
        onPress = {() =>navigation.navigate('TelaChat', {prof: 'TiagoSilva'})}
      >
      <Icone_mentor prof = 'TiagoSilva' nav_perfil ={0}/>
        <Text style={styles.chat_instrutor_text}>Tiago Silva</Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.chat_instrutor}
        onPress = {() => navigation.navigate('TelaChat', {prof: 'GeorgeCarlos'})}>
      <Icone_mentor prof = 'GeorgeCarlos' nav_perfil ={0}/>
      <Text style={styles.chat_instrutor_text}>George Carlos</Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.chat_instrutor}
        onPress = {() => navigation.navigate('TelaChat', {prof: 'MarinaBorges'})}>
      <Icone_mentor prof = 'MarinaBorges' nav_perfil ={0}/>
      <Text style={styles.chat_instrutor_text}>Marina Borges</Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.chat_instrutor}
        onPress = {() => navigation.navigate('TelaChat', {prof: 'MarcosSousa'})}>
      <Icone_mentor prof = 'MarcosSousa' nav_perfil ={0}/>
      <Text style={styles.chat_instrutor_text}>Marcos Sousa</Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.chat_instrutor}
        onPress = {() => navigation.navigate('TelaChat', {prof: 'AndreMarcos'})}>
      <Icone_mentor prof = 'AndreMarcos' nav_perfil ={0}/>
      <Text style={styles.chat_instrutor_text}>Andre Marcos</Text>
      </TouchableOpacity>
      <View style = {styles.barra_navegacao}>
            <TouchableOpacity style = {{alignItems:'center',padding:10,height:70, width:120,borderWidth:2, borderBottomColor:select==1? '#15ddf7':null}} onPress ={()=>{setSelect(1);navigation.navigate('TelaPrincipal')}}>
              <Image source={require('./assets/Path.png')}/>
              <Text style={{color: 'white'}}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {{alignItems:'center',padding:10,height:70, width:120,borderWidth:2, borderBottomColor:select==2? '#15ddf7':null}} onPress ={()=>{setSelect(2)}}>
              <Image source={require('./assets/calendario.png')} resizeMode ='contain'  style={{width:35, height: 25}}/>
              <Text style={{color: 'white'}}>Agenda</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={{alignItems:'center',padding:10,height:70, width:120,borderWidth:3, borderBottomColor:select==3? '#15ddf7':null}} 
            onPress ={()=>{setSelect(3); navigation.navigate('SelectChat')}}>
              <Image source={require('./assets/discurso.png')} resizeMode = 'contain' style ={{height:25}}/>
              <Text style={{color: 'white'}}>Chat</Text>
            </TouchableOpacity>
            
      </View>
    </View>
    </ScrollView>
    
  )
}
function TelaBoasVindas({navigation}){
  
  return(
      <View style = {styles.TelaInicial}>
        <Image source={require('./assets/Musico3.png')} style={{position: 'absolute', bottom: -220, width:400}}/>
        <View style= {styles.retangulo} />
        <Text style={styles.text_inicial}>
          Aprenda a tocar qualquer instrumento
        </Text>
        <Text style = {{position:'absolute',bottom:130,fontSize: 20, width: 300}}>Encontre os melhores profissionais da sua região e agende suas aulas</Text>
        <TouchableOpacity style = {{position: 'absolute', bottom: 50, right: 50}}
          onPress={ () => navigation.navigate('TelaPrincipal')}
        >
          <Image source={require('./assets/Frame2.png')} />
        </TouchableOpacity>
        
      
      </View>
    );
}

//========================= Perfil do instrutor ==============================



//======================= Fim das Telas ======================================
const {Navigator,Screen} = createNativeStackNavigator();
export default function App() {
  return (
    /*
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
    */
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name="Tela " component={TelaBoasVindas}/>
        <Screen name="TelaPrincipal" component={TelaPrincipal}/>
        <Screen name="PerfilInstrutor" component={PerfilInstrutor}/>
        <Screen name ='SelectChat' component={SelectChat}/>
        <Screen name='TelaChat' component={Chat}/>
        <Screen name= 'Map' component={Map}/>
      </Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  },
  TelaInicial:{
    flex:1,
    backgroundColor: '#03fcd3',
    alignItems: 'center',

    
  },
  img_incial:{
    position: 'absolute',
    
  },
  text_inicial:{
    position: 'absolute',
    bottom: 220,
    fontSize: 45,
    fontWeight: 'bold'
  },
  retangulo:{
    width:200,
    height:30,
    backgroundColor: '#fce303', 
    position: 'absolute',
    right:50,
    bottom:280
  },
  Principal:{
    flex:1, backgroundColor: '#000', color: '#fff', justifyContent:'flex-start', flexDirection: 'column'
    
  },
  barra_navegacao:{
    height: 10,
    width:400,
    alignItems: 'baseline', 
    justifyContent: 'center',
    marginTop:50,
    marginBottom:50,

    marginLeft:10,
    alignItems: 'center',
    flexDirection: 'row',
    textAlign: 'center',

  },
  chat_instrutor:{
    backgroundColor:'#141414',
    borderRadius: 15,
    width:'80%',
    marginTop: 30,
    flexDirection: 'row',
    padding: 10
  },
  chat_instrutor_text:{
    marginTop: 30,
    fontSize: 20, fontWeight: 'bold', color: 'white'
  }
});
