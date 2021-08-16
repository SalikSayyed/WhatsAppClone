import * as React from 'react';
import {StyleSheet } from 'react-native';
import Palete from '../config/ColorPalete';
import CallsScreen from './CallsScreen';
import ChatScreen from './ChatScreen';
import StatusScreen from './StatusScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TopNavigation from './models/MainScreenHeader';


const Tab = createMaterialTopTabNavigator();

const MyStack = () => {
  return (
    <>
     <TopNavigation />

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
      <Tab.Screen name="Status" component={StatusScreen} options={{
        tabBarLabel : 'STATUS',
        tabBarStyle : styles.tabContainer,
      }}/>
      <Tab.Screen name="Calls" component={CallsScreen} options={{
         tabBarLabel : 'CALLS',
         tabBarStyle : styles.tabContainer,
      }}/>
    </Tab.Navigator>
    </NavigationContainer>
    
    </>
  );
};


const styles = StyleSheet.create({

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
 
})

export default MyStack;