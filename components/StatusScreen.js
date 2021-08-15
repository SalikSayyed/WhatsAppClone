import React from 'react';
import { View,Text,StyleSheet,Button } from 'react-native';


export default function ContactScreen({navigation}){
   return(
       <View>
           <Text>Hello This is STATUS Screen!</Text>
           <Button title='CONTACTS' onPress={()=>{navigation.navigate('Chats')}}/>
       </View>
   );
}