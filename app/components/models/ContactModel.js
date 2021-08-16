import { PrivateValueStore } from '@react-navigation/native';
import React from 'react';
import { View,Text,Image,TouchableOpacity,StyleSheet } from 'react-native';
import MainText from './MainText';
import MinorText from './MinorText';
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
        <MinorText text={item.subtitle}/>
        </View>
        </ListItem>
        <View style={styles.notifications}>
            
            <Text style={styles.dateNotifier}>3/10/14</Text>
            
            <View style={styles.talksNotifier}>
            <Text style={styles.talksText}>3</Text>
            </View>
        </View>
      </ListItem>
    </TouchableOpacity>
    )
}

const styles= StyleSheet.create({
    
    dateNotifier:{
        color : 'green',
        height : 20,
        marginBottom : 5
    },
    talksNotifier : {
       backgroundColor : 'green',
       color : 'white',
       height : 20,
       width : 20,
       borderRadius : 10,
       alignItems : 'center',
       justifyContent : 'center'
    },
    talksText:{
      color : 'white'
    },
    notifications :{
           flexDirection  : 'column',
           alignItems : 'center',
           justifyContent :'space-between',
           marginVertical : 15,
           height: 25,
           marginRight : 10
    },
    seprator :{
        height : 20,
        backgroundColor : 'white'
    },
    infoSection:{
        flexDirection : 'column',
        justifyContent : 'space-between',
        backgroundColor : 'white',
        marginLeft : 10
    }
})