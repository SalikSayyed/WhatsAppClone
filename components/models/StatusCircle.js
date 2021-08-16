import React from 'react';
import { View,Image,StyleSheet } from 'react-native';
import Palete from '../../config/ColorPalete';

export default function StatusCircle({imageSource,style}){
    return(
        
            <View style={styles.statusContainer}>
            <View style={[{
                backgroundColor : 'white',
                height : 60,
                width: 60,
                borderRadius  :10,
                position : 'absolute',
                alignSelf : 'center',
                
        
        },style]}></View>
            <Image source={imageSource} style={[styles.imageStyle,style]} />
            </View>
    
    )
}

const styles = StyleSheet.create({
    imageStyle:{
        height: 70,
        zIndex : 2,
        position : 'absolute',
        width : 70,
        borderWidth: 3,
        borderRadius : 100,
        borderColor : 'white',
        alignSelf : 'center',
        resizeMode : 'cover'
    },
    mainContainer : {
        flex : 1,
        zIndex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    statusContainer: {
        flexDirection : 'column',
        zIndex : 1,
        height : 75,
        width : 75,
        justifyContent : 'center',
        borderRadius : 37.5,
        backgroundColor : Palete.shinyGreen,
    }
})