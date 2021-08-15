import React from 'react';
import { View,Text,StyleSheet,TouchableHighlight,FlatList } from 'react-native';
import ContactModel from './models/ContactModel';

const data = [
    {
        title : "some message",
        subtitle : "some practice",
        id : 1
    },
    {
        title : "some message",
        subtitle : "some practice",
        id : 2
    },
    {
        title : "some message",
        subtitle : "some practice",
        id : 3
    },
    {
        title : "some message",
        subtitle : "some practice",
        id : 4
    },
    {
        title : "some message",
        subtitle : "some practice",
        id : 5
    },
    {
        title : "some message",
        subtitle : "some practice",
        id : 6
    },
    {
        title : "some message",
        subtitle : "some practice",
        id : 7
    },
    {
        title : "some message",
        subtitle : "some practice",
        id : 8
    },
    {
        title : "some message",
        subtitle : "some practice",
        id : 9
    },
    {
        title : "some message",
        subtitle : "some practice",
        id : 10
    },
    {
        title : "some message",
        subtitle : "some practice",
        id : 11
    }
]

export default function ContactScreen({navigation}){
   return(
       <View style={styles.mainScreen}>
          
    <FlatList
  
        data={data}
        renderItem={({ item, index, separators }) => (
        <ContactModel item={item}/>
  )}
/>
        
       </View>
   );
}

const styles = StyleSheet.create({
    mainScreen : {
        flex : 1,
        backgroundColor : 'white',

    },
    
})