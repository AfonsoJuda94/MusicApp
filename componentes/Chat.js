import { useState } from 'react';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import {useAuthState} from 'react-firebase-hooks';
import {useCollection, usecollectionData} from 'react-firebase-hooks/firestore';
import { Button,View,Text } from 'react-native';
import { Firestore } from 'firebase/firestore';
import { async } from '@firebase/util';

firebase.initializeApp({
  apiKey: "AIzaSyBFfO1P4Ii3EGUuY73UYDoa8mxXqoZAKqU",
  authDomain: "musicapp-ead65.firebaseapp.com",
  projectId: "musicapp-ead65",
  storageBucket: "musicapp-ead65.appspot.com",
  messagingSenderId: "578676333109",
  appId: "1:578676333109:web:1f9a20c3b26c681cceaf7c"
})
const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

function Login(){
  const signInWithGoogle=() =>{
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return(
    <Button onClick = {signInWithGoogle}>Fazer login com Google</Button>
  )
}
function Logout(){
  return auth.currentUser && (
    <Button onClick = {()=>auth.Logout()}>Sair</Button>
  )
}
function ChatMessage(props){
  const {text,uid, photoURL} = props.message;
  const messageClass = uid === auth.currentUser.uid? 'sent': 'recieved';
  return(
    <div className={`message ${messageClass}`}>
      <p>{text}</p>
    </div>
  )
}

function ChatRoom(){
  const messagesRef = Firestore.collection('messages');
  const query = messagesRef.orderBy('CreatedAt').limit(25);
  const [messages] = useCollection(query, {idField: 'id'});
  const [formValue, setFormValue] = useState(''); 

  const sendMessage = async(e)=>{
    e.preventDefault();
    const {uid,photoURL} = auth.currentUser;
    await messagesRef.add({
        text: formValue,
        createdAt:firebase.Firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL
    });
    setFormValue('');
  }

  return(
    <>
      <div>
        {messages && messages.map(msg => <ChatMessage key={msg.id} message ={msg}/>)}
      </div>
      <form onSubmit={sendMessage}>
        <input value={formValue} onChange={(e)=> setFormValue(e.target.value)}/>
        <button type='submit'></button>
      </form>
    </>
  )
}
export default function Chat(){
  const [user] = useAuthState(auth);
  return(
    <View className="Chat">
      <View>
        <Text>⚛️🔥💬</Text>
        <Logout/>
      </View>
      <View>
        {user?<ChatRoom/>:<Login/>}
      </View>
    </View>
  )
}



