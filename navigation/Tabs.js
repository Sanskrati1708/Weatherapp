import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet,Text,View,Image,TouchableOpacity } from 'react-native';
import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'
const Tab=createBottomTabNavigator();

const Tabs=()=>{
    return(
        <Tab.Navigator
        screenOptions={{
            tabBarShowLabel:false,
            tabBarStyle:{
                position: 'absolute',
                bottom: 20,
                left:20,
                right:20,
                // elevation:44,
                backgroundColor:'#FFFFFF',
                borderRadius:15,
                height: 90,
                opacity:0.9
            }

        }}
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon:({focused})=>(
                    <View style={{alignItems:'center',
                    justifyContent:'center',
                    top:10}}>
                        <Image source={require('../assets/home.png')} resizeMode='contain' style={{
                            width:25,
                            height:25,
                            tintColor: focused? 'black' : '#748c94'
                        }}/>
                        <Text style={{color:focused? 'black': '#748c94', fontSize:12}}>Home</Text>
                    </View>
                ),
            }}/>
            <Tab.Screen name="Search" component={SearchScreen}
            options={{
                tabBarIcon:({focused})=>(
                    <View style={{alignItems:'center',
                    justifyContent:'center',
                    top:10}}>
                        <Image source={require('../assets/search.png')} resizeMode='contain' style={{
                            width:25,
                            height:25,
                            tintColor: focused? 'black' : '#748c94'
                        }}/>
                        <Text style={{color:focused? 'black': '#748c94', fontSize:12}}>Search</Text>
                    </View>
                ),
            }}
            />
            {/* <Tab.Screen name="Chat" component={ChatScreen}
            
            options={{
                tabBarIcon:({focused})=>(
                    <View style={{alignItems:'center',
                    justifyContent:'center',
                    top:10}}>
                        <Image source={require('../assets/chat.png')} resizeMode='contain' style={{
                            width:25,
                            height:25,
                            tintColor: focused? 'black' : '#748c94'
                        }}/>
                        <Text style={{color:focused? 'black': '#748c94', fontSize:12}}>Chat</Text>
                    </View>
                ),
            }}/> */}
            {/* <Tab.Screen name="Settings" component={SettingScreen}
            
            options={{
                tabBarIcon:({focused})=>(
                    <View style={{alignItems:'center',
                    justifyContent:'center',
                    top:10}}>
                        <Image source={require('../assets/setting.png')} resizeMode='contain' style={{
                            width:25,
                            height:25,
                            tintColor: focused? 'black' : '#748c94'
                        }}/>
                        <Text style={{color:focused? 'black': '#748c94', fontSize:12}}>Settings</Text>
                    </View>
                ),
            }}/> */}
        </Tab.Navigator>
    );
    
}

export default Tabs;