import React from 'react';
import { Text,StyleSheet } from 'react-native';
import Palete from '../../config/ColorPalete';
export default function MainText({text}){
    return(
        <Text style={styles.MajorStyle}>{text}</Text>
    )
}

const styles = StyleSheet.create({
    MajorStyle:{
        fontWeight : 'bold',
        fontSize : 24,
        color : Palete.textBlack
    }
})