import React from 'react';
import { Button,View,Text,StyleSheet } from 'react-native';
import Palete from '../../config/ColorPalete';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function TopNavigation(){
    return(
        <View style={styles.topHeader}>
    <View style={styles.topHeading}>
      <Text
    style={styles.topHeadingText}
    >WhatsApp</Text>
    <View style={styles.topIcons}>
     <MaterialIcons name="magnify" color={Palete.textWhite} size={30}/>
     <MaterialIcons name="dots-vertical" color={Palete.textWhite} size={30}/>
     </View>
    </View>
    </View>
    )
}

const styles = StyleSheet.create({
    topHeader:{
        flexDirection : 'column',
        justifyContent :'center',
        backgroundColor : Palete.weightedGreen,
    
      },
      topIcons:{
         flexDirection :'row',
         width : '30%',
         justifyContent : 'flex-end',
      },
      topHeading:{
        flexDirection:'row',
        justifyContent : 'space-between',
        paddingVertical : 10,
        paddingHorizontal : 10,
      },
      topHeadingText :{
        fontSize : 25,
        fontWeight :'bold',
        color : Palete.textWhite,
        
     }
})