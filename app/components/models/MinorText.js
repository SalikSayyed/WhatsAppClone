import React from 'react';
import { Text,View,StyleSheet } from 'react-native';
import Palete from '../../config/ColorPalete';
import fontsPalete from '../../config/FontsPalete';

export default function MinorText({text}){
    return(
        <Text style={styles.MinorStyle}>{text}</Text>
    )
}

const styles = StyleSheet.create({
    MinorStyle:{
        fontSize : 16,
        fontFamily : fontsPalete.minorText,
        color : Palete.textGrey
    }
})