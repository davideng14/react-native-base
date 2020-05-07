import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import StoreScreen from './src/screens/StoreScreen';
import { StyleSheet, Text, View, Image, ActivityIndicator, Button, FlatList, TextInput } from 'react-native';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="StoreScreen" component={StoreScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}