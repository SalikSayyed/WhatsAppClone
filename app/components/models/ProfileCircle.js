import React from 'react';
import {StyleSheet,Image } from 'react-native';

export default function ProfileCircle({imageSource}){
    return(
        <Image source={imageSource} 
        style={styles.profilePicStyle}/>   
    )
}

const styles = StyleSheet.create({
    profilePicStyle : {
        height : 70,
        width : 70,
        resizeMode : 'cover',
        borderRadius : 35,
    }
})