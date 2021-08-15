import { PrivateValueStore } from '@react-navigation/native';
import React from 'react';
import { View,Text,Image,TouchableOpacity,StyleSheet } from 'react-native';


export default function ContactModel({item}){
    return(
        <TouchableOpacity
      key={item.key}
      onPress={() => console.log('clicked!')}
      
      >
      <View style={styles.item}>
        <View style={styles.item}>
        <Image source={require('../../assets/profile3.png')} style={styles.profilePicStyle}/>
        <View style={styles.infoSection}>
        <Text style={styles.MainStyle}>{item.title}</Text>
        <Text style={styles.MinorStyle}>{item.subtitle}</Text>
        </View>
        </View>
        <View style={styles.notifications}>
            
            <Text style={styles.dateNotifier}>3/10/14</Text>
            
            <View style={styles.talksNotifier}>
            <Text style={styles.talksText}>3</Text>
            </View>
        </View>
      </View>
    </TouchableOpacity>
    )
}

const styles= StyleSheet.create({
    item : {
        height : 80,
        flexDirection : 'row',
        justifyContent :'space-between',
        backgroundColor : 'white',
        marginVertical : 10,
        marginLeft: 5

    },
    MainStyle:{
       fontWeight : 'bold',
       fontSize : 18
    },
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
           height: 25,
           marginRight : 10
    },
    MinorStyle:{
      fontSize : 14
    },
    seprator :{
        height : 20,
        backgroundColor : 'white'
    },
    infoSection:{
        flexDirection : 'column',
        backgroundColor : 'white',
        marginLeft : 10
    },
    profilePicStyle : {
        height : 80,
        width : 80,
        resizeMode : 'cover',
        borderRadius : 40,
        

    }
})