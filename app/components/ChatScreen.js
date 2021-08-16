import React from 'react';
import { View,Text,StyleSheet,TouchableHighlight,FlatList } from 'react-native';
import ContactModel from './models/ContactModel';
import ContactsData from '../config/ContactsData';


export default function ContactScreen({navigation}){
   return(
       <View style={styles.mainScreen}>
          
    <FlatList
  
        data={ContactsData}
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