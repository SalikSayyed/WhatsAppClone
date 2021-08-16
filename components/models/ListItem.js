import React from 'react';
import { View,StyleSheet } from 'react-native';

export default function ListItem({children,style}){
    return(
        <View style={[styles.item,style]}>
          {children}
        </View>
    )
}

const styles = StyleSheet.create({
    item : {
        height : 80,
        flexDirection : 'row',
        justifyContent :'space-between',
        alignItems : 'center',
        backgroundColor : 'white',
        marginVertical : 10,
        marginLeft: 5

    },
})