import * as React from 'react';
import { StatusBar,View,Text } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './navigation/Tabs'
// import CurrentPosition from './components/location';

export default App=()=>{
  return(
 
    <NavigationContainer>
      <Tabs/>
    </NavigationContainer>
   
  );
}