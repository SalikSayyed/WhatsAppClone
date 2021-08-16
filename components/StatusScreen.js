import { PrivateValueStore } from '@react-navigation/native';
import React from 'react';
import { View,Text,StyleSheet,Button, SafeAreaView, FlatList } from 'react-native';
import ContactsData from '../config/ContactsData';
import ListItem from './models/ListItem';
import MainText from './models/MainText';
import MinorText from './models/MinorText';
import StatusCircle from './models/StatusCircle';

export default function ContactScreen({navigation}){
   return(
       <SafeAreaView style={{backgroundColor : 'white'}}>
           <FlatList 
           data={ContactsData}
           key={({item})=>item.key}
           renderItem = {({item})=>{
            return(
                <ListItem style={styles.statusItem}>
                <StatusCircle imageSource={require('../assets/profile3.png')}/>
                <View style={styles.infoSection}>
        <MainText text={item.title}/>
        <MinorText text={item.subtitle}/>
        </View>
        </ListItem>
            )

           }}
           />
       </SafeAreaView>
   );
}

const styles = StyleSheet.create({
    statusItem:{
      justifyContent: 'flex-start',
    },
    infoSection:{
        flexDirection : 'column',
        justifyContent : 'space-between',
        backgroundColor : 'white',
        marginLeft : 10
    }
})