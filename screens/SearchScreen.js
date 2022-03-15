
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import WeatherSearch from '../components/WeatherSearch';
import SearchBar from '../components/SearchBar';


const API_KEY = "46a9246bebba16d42b36aac3fc3ba8af";

let weather=[]
export default function Home() {
   
    const [weatherData, setWeatherData] = useState(null);
    const [loaded, setLoaded] = useState(true);

    async function fetchWeatherData(cityName) {
        setLoaded(false);
        const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
        try {
            const response = await fetch(API);
            if(response.status == 200) {
                const data = await response.json();
                weather.unshift(data)
                console.log(data)
                setWeatherData(data);
            } else {
                setWeatherData(null);
            }
            setLoaded(true);
            
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchWeatherData('agra');
    }, [])
    // console.log(weather)

    if(!loaded) {
        return (
            <View style={styles.container}>
                <ActivityIndicator color='gray'  size={36} />
            </View>

        )
    }

    else if(weatherData === null) {
        return (
            <View>
            <SearchBar fetchWeatherData={fetchWeatherData}/>
                <Text style={styles.primaryText}>City Not Found! Try Different City</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
             <SearchBar weatherData={weatherData} fetchWeatherData={fetchWeatherData} />
            <WeatherSearch weather={weather} />
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