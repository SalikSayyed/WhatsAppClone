import React from 'react';
import { View,Text,StyleSheet,TouchableHighlight,FlatList } from 'react-native';
import CallModel from './models/CallsModel';
import CallsData from '../config/CallsData';


export default function ContactScreen({navigation}){
   return(
       <View style={styles.mainScreen}>
          
    <FlatList
  
        data={CallsData}
        renderItem={({ item, index, separators }) => (
        <CallModel item={item}/>
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