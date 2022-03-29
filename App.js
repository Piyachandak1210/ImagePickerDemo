import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
  Alert,
  Platform,
  TouchableHighlight,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CameraDemo from './CameraDemo';
import Home from './Home';
import ImagePickerDemo from './ImagePickerDemo';
const Stack = createNativeStackNavigator();
const App = () => {


  return (
   
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="CameraDemo" component={CameraDemo} />
          <Stack.Screen name="Imagepicker" component={ImagePickerDemo} />
         
        </Stack.Navigator>
      </NavigationContainer>

     
  );
};

export default App;

