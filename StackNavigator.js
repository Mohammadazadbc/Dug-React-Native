import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './linkSocialMedia/Home';
import Calendar from './linkSocialMedia/Calendar';

export default function StackNavigator() {

    const Stack = createNativeStackNavigator();
  return (
  <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Group>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen screenOptions={{headerShown:true}} name="Calendar" component={Calendar}/>
      </Stack.Group>
  </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})