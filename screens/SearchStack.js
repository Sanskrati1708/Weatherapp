
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import WeatherHome from '../components/WeatherHome';
import GetLocation from 'react-native-get-location';
import Toast from 'react-native-simple-toast';
// const [city,set city]=useState('Mumbai');


const API_KEY = "46a9246bebba16d42b36aac3fc3ba8af";


export default function Home(routes) {
    const lat=routes.route.params.lat;
    const long=routes.route.params.lon;
   
    const [weatherData, setWeatherData] = useState();
    const [loaded, setLoaded] = useState(true);
    const [forecast,setForcast]=useState();

    async function fetchWeatherData(lat,long) {
        setLoaded(false);
        const response=(await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`));
        const responseForcast=(await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly&appid=${API_KEY}`));
       
            if(response.status == 200 && responseForcast.status==200) {
                const data = await response.json();
                console.log(data)
                const forcastData=await responseForcast.json();
                console.log(forcastData)
                setWeatherData(data);
                setForcast(forcastData);

            } else {
                setWeatherData(null);
            }
            setLoaded(true);
            
        } 
    
    
    useEffect(() => {
        fetchWeatherData(lat,long);
    }, [])
    
    // console.log(forecast);
    if(!loaded) {
        return (
            <View style={styles.container}>
                <ActivityIndicator color='gray'  size={36} />
            </View>

        )
    }

    else if(weatherData === undefined) {
        return (
            <View style={styles.container}>
                 {/* <ActivityIndicator color='gray'  size={36} /> */}
                <Text style={styles.primaryText}>City Not Found! Try Different City</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <WeatherHome weatherData={weatherData} forecast={forecast} />
            
        </View>
    );

   
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryText: {
      margin: 20,
      fontSize: 28
  }
});