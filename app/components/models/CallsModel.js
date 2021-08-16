import { PrivateValueStore } from '@react-navigation/native';
import React from 'react';
import { View,Text,Image,TouchableOpacity,StyleSheet } from 'react-native';
import MainText from './MainText';
import MinorText from './MinorText';
import Palete from '../../config/ColorPalete';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome5';
import ProfileCircle from './ProfileCircle';
import ListItem from './ListItem';

export default function ContactModel({item}){
    return(
        <TouchableOpacity
      key={item.key}
      onPress={() => console.log('clicked!')}
      
      >
      <ListItem >
        <ListItem style={styles.item}>
        <ProfileCircle imageSource={require('../../assets/profile3.png')} />
        <View style={styles.infoSection}>
        <MainText text={item.title}/>
        <View style={styles.lastConversation}>
            <View style={{marginRight : 5}}>
            <MaterialIcons name="arrow-top-right" size={20} color='red' />
            </View>
            <MinorText text={item.timing}/> 
            </View>
        
        </View>
        </ListItem>
        <View style={styles.notifications}>
            <FontAwesomeIcons name="phone-alt" color={Palete.mediumGreen} size={30}/>
        </View>
      </ListItem>
    </TouchableOpacity>
    )
}

const styles= StyleSheet.create({
    notifications :{
           flexDirection  : 'column',
           alignItems : 'center',
           justifyContent :'space-between',
           marginVertical : 15,
           height: 30,
           marginRight : 20
    },
    infoSection:{
        flexDirection : 'column',
        justifyContent : 'space-between',
        backgroundColor : 'white',
        marginLeft : 10
    },
    lastConversation :{
        flexDirection : 'row',
        justifyContent : 'space-between'
    }
})

