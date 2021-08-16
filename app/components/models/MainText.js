import React from 'react';
import { Text,StyleSheet, Platform } from 'react-native';
import Palete from '../../config/ColorPalete';
import fontPalete from '../../config/FontsPalete';
export default function MainText({text}){
    return(
        <Text style={styles.MajorStyle}>{text}</Text>
    )
}

const styles = StyleSheet.create({
    MajorStyle:{
        fontWeight : 'bold',
        fontSize : 24,
        fontFamily : fontPalete.mainText,
        color : Palete.textBlack
    }
})