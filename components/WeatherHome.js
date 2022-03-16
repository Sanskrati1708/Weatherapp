import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ImageBackground, Dimensions, StatusBar } from 'react-native';
import {snow,haze,sunny,rainy,clouds,smoke,mist,dust,fog,sand,ash,squall,tornado}from '../assets/backgroundimg/images';
// import SettingsScreen from '../screens/SettingScreen';
import ForecastScroll from './forecastScroll';



export default function Weather({ weatherData,forecast}) {
    const [backgroundImage, setBackgroundImage] = useState(null);
// if(weatherData!=null)
    const { weather,
        name,
        coord: {lon,lat},
        main: { temp, temp_min,temp_max,pressure,humidity },
        wind: { speed }
} = weatherData;

const [{ main }] = weather;


    useEffect(() => {
        setBackgroundImage(getBackgroundImg(main));
    })

    function getBackgroundImg(weather) {
        if(weather === 'Snow') return snow
        if(weather === 'Clear') return sunny
        if(weather === 'Rain') return rainy
        if(weather === 'Haze') return haze
        if(weather==='Clouds') return clouds
        if(weather==='Smoke') return smoke
        if(weather==='Mist') return mist
        if(weather==='Dust') return dust
        if(weather==='Fog') return fog
        if(weather==='Sand') return sand
        if(weather==='Ash') return ash
        if(weather==='Squall') return squall
        if(weather==='Tornado') return tornado
        return snow;  
    }

    let textColor = 'black'
    // console.log(SettingsScreen.tempU);
    
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='darkgray' />
            <ImageBackground 
                source={backgroundImage}
                style={styles.backgroundImg}
                resizeMode='cover'
            >
                <View style={styles.content}>
                 <View style={styles.mainInfo}>
                    <Text style={{ ...styles.headerText, color: textColor, fontWeight: '900', fontSize: 18 }}>{name}</Text>
                    <Text style={{ ...styles.headerText, color: textColor, fontWeight: '800', fontSize:20}}>{main}</Text>
                    <Text style={{ ...styles.headerText, color: textColor,fontWeight:'800'}}>{temp} °C</Text>
                </View>
                <View style={styles.info}>
                        <Text style={{ fontSize: 13, color: 'white' ,fontWeight: '400'}}>Latitude: {lat}</Text>
                        <Text style={{ fontSize: 13, color: 'white' ,fontWeight: '400'}}>Longitude: {lon}</Text>
                        <Text style={{ fontSize: 13, color: 'white' ,fontWeight: '400'}}>Minimum Temperature: {temp_min}°C</Text>
                        <Text style={{ fontSize: 13, color: 'white' ,fontWeight: '400'}}>Maximum Temperature: {temp_max}°C</Text>

                        <Text style={{ fontSize: 13, color: 'white' ,fontWeight: '400'}}>Wind Speed: {speed} m/s</Text>
                        <Text style={{ fontSize: 13, color: 'white' ,fontWeight: '400'}}>Pressure: {pressure}</Text>

                        <Text style={{ fontSize: 13, color: 'white' ,fontWeight: '400'}}>Humidity: {humidity} m/s</Text>
                </View>
                
                <ForecastScroll forecast={forecast}/>
                </View>
                

            </ImageBackground>
        </View>
    )
// else{
//     return(<Text>Weather data is null</Text>)
// }
}

const styles = StyleSheet.create({
    mainInfo:{
        alignItems:'center',
        backgroundColor:'rgba(255,255,255, 0.6)',
        padding:5,
        marginTop:20,
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    backgroundImg: {
        flex: 1,
        width: Dimensions.get('screen').width
    },
    headerText: {
        fontSize: 18,
        marginTop: 10,
    },
    extraInfo: {
        alignItems:'center',
        justifyContent:"center",
        borderRadius:10,
        borderColor:'white',
        borderWidth:1,
        padding:10,
        margin:10
    },
    info: {
        justifyContent:"center",
        backgroundColor:'rgba(0,0,0, 0.7)',
        borderRadius:10,
        borderColor:'black',
        borderWidth:1,
        padding:20,
        margin:10,
        marginBottom:40,
        marginTop:40
    },
});
  