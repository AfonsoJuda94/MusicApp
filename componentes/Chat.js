// @refresh reset
import react,{useState, useEffect, useCallback} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, YellowBox, TextInput } from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { Button } from 'react-native';
import { GiftedChat, InputToolbar } from 'react-native-gifted-chat';
import { LogBox } from 'react-native';
import Icone_mentor from './Icone_mentor';
const firebaseConfig = {
  apiKey: "AIzaSyBFfO1P4Ii3EGUuY73UYDoa8mxXqoZAKqU",
  authDomain: "musicapp-ead65.firebaseapp.com",
  projectId: "musicapp-ead65",
  storageBucket: "musicapp-ead65.appspot.com",
  messagingSenderId: "578676333109",
  appId: "1:578676333109:web:1f9a20c3b26c681cceaf7c"
};
if(firebase.apps.length===0){
  firebase.initializeApp(firebaseConfig);
}
  


LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();


export default function Chat({route}) {
  //==========================Configurando o usuário ===================
  const db = firebase.firestore()
  const chatsRef = db.collection(route.params.prof)
  const [user,setUser] = useState(null);
  const [name,setName] = useState('');
  const [messeges,setMesseges] = useState([]);
  useEffect(()=>{
    readUser()
    const unsubscribe = chatsRef.onSnapshot(querySnapshot => {
      const  messagesFirestore = querySnapshot.docChanges().filter(({type})=>type ==='added')
                      .map(({doc})=>{
                        const message = doc.data();
                        //Formato da mesnagem
                        return {...message, createdAt: message.createdAt.toDate()}
                      }).sort((a,b)=>b.createdAt.getTime() -a.createdAt.getTime())
                      appendMessages(messagesFirestore)
                    })
                    return ()=>unsubscribe()
    
  },[])

  const appendMessages = useCallback((messages)=>{
    setMesseges((previousMessages)=> GiftedChat.append(previousMessages,messages))
  },[messeges])

  async function readUser(){
    const user = await AsyncStorage.getItem('user');
    if(user){
      setUser(JSON.parse(user));
    }
      
  }
  async function handlePress(){
    const _id = Math.random().toString(36).substring(7);
    const user = {_id,name}
    await AsyncStorage.setItem('user',JSON.stringify(user));
    setUser(user);
  }
  if(!user){
    return <View style={styles.container}>
        <TextInput style = {styles.input} placeholder = 'Digite seu nome'
        value={name} onChangeText ={setName}
        />
        <Button title='Entrar no chat' onPress={handlePress}/>
    </View>
  }
  //=============================================================
  async function handleSend(messages){
    const writes = messages.map(m => chatsRef.add(m))
    await Promise.all(writes)
  }
  const customtInputToolbar = props => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          backgroundColor: "white",
          borderTopColor: "#E8E8E8",
          borderTopWidth: 1,
          padding: 8
        }}
      />
    );
  };
  return (
      
      <View style={styles.chat}>
        <View style = {styles.topo}>
          <Icone_mentor prof = {route.params.prof} style = {{height:5}} tamanho = {80}/>
          <Text style = {{color: 'white',marginTop:30,fontSize:17, fontWeight: 'bold'}}>{route.params.prof=='TiagoSilva'? 'Tiago Silva': null}</Text>
          <Text style = {{color: 'white',marginTop:30,fontSize:17, fontWeight: 'bold'}}>{route.params.prof=='MarcosSousa'? 'Marcos Sousa': null}</Text>
          <Text style = {{color: 'white',marginTop:30,fontSize:17, fontWeight: 'bold'}}>{route.params.prof=='MarinaBorges'? 'Marina Borges': null}</Text>
          <Text style = {{color: 'white',marginTop:30,fontSize:17, fontWeight: 'bold'}}>{route.params.prof=='GeorgeCarlos'? 'George Carlos': null}</Text>
          <Text style = {{color: 'white',marginTop:30,fontSize:17, fontWeight: 'bold'}}>{route.params.prof=='AndreMarcos'? 'Andre Marcos': null}</Text>
        </View>
        <GiftedChat renderInputToolbar={props => customtInputToolbar(props)}
      messages={messeges} user = {user} onSend ={handleSend}/>
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    padding:30,
    color: 'white'

  },
  input:{
    height: 50,
    width: '100%',
    borderWidth: 1,
    padding:15,
    borderColor: 'gray',
    color: 'white',
    marginBottom: 20 
  },
  chat:{
    backgroundColor: 'black',
    color: 'white',
    flex:1,
  },
  topo:{
    width: '100%',
    borderBottomColor: 'gray',
    borderWidth: 2,
    marginTop: 10,
    padding: 20,
    flexDirection: 'row'
  }
});
