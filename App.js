import * as React from 'react';
import { Button,Text,View,StyleSheet } from 'react-native';
import Palete from './config/ColorPalete';
import CallsScreen from './components/CallsScreen';
import ChatScreen from './components/ChatScreen';
import StatusScreen from './components/StatusScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { palevioletred } from 'color-name';

const Tab = createMaterialTopTabNavigator();

const MyStack = () => {
  return (
    <>
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

    <NavigationContainer>  
    <Tab.Navigator
     initialRouteName='Chats'
     headerShow = {true}
     screenOptions={{
       tabBarBounces : true,
       tabBarShowLabel : true,
       tabBarLabelStyle  :styles.tabHeading,
       tabBarIndicatorStyle : styles.tabBarIndicatorStyle,
       
     }}
    >
      
      <Tab.Screen name="Chats" component={ChatScreen} options={{
        tabBarLabel :'CHAT',
        tabBarStyle : styles.tabContainer,
      }}/>
      <Tab.Screen name="Calls" component={CallsScreen} options={{
         tabBarLabel : 'CALLS',
         tabBarStyle : styles.tabContainer,
      }}/>
      <Tab.Screen name="Status" component={StatusScreen} options={{
         tabBarLabel : 'STATUS',
         tabBarStyle : styles.tabContainer,
      }}/>
    </Tab.Navigator>
    </NavigationContainer>
    
    </>
  );
};


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
  tabContainer : {
    backgroundColor : Palete.weightedGreen,
    
  },
  tabBarIndicatorStyle:{
       backgroundColor : Palete.textWhite,
       height : 4,
  },
  tabHeading : {
      color  : Palete.textWhite,
      fontWeight : 'bold',
      fontSize : 15
  },
  topHeadingText :{
     fontSize : 25,
     fontWeight :'bold',
     color : Palete.textWhite,
     
  },
})

export default MyStack;