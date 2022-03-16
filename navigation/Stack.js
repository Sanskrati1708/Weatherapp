import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
// import { createStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from '../screens/SearchScreen'
import SearchStack from "../screens/SearchStack";
const Stack=createStackNavigator();

const cardNavigator=()=>{
    return(
        <Stack.Navigator screenOptions={{headerShown:true}}>
        <Stack.Screen
            name="SearchScreen"
            component={SearchScreen}/>
               <Stack.Screen
            name="SearchStack"
            component={SearchStack}/>
            

        </Stack.Navigator>
    );
}
export {cardNavigator};