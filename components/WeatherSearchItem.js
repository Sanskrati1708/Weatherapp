import React, {useState, useEffect} from 'react';
// import { Icon } from 'react-native-elements';




import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Button} from 'react-native-elements/dist/buttons/Button';

export default function WeatherSearchItem({
  weatherData,
  getBackgroundImg,
  setWeather,
}) {
  const [backgroundImage, setBackgroundImage] = useState(null);
  const {
    weather,
    name,
    coord: {lon, lat},
    main: {temp, temp_min, temp_max, pressure, humidity},
    wind: {speed},
  } = weatherData;
  const [{main}] = weather;
  let textColor = 'black';

  useEffect(() => {
    setBackgroundImage(getBackgroundImg(main));
  }, [weatherData]);

  return (
    <View style={styles.container} key={`${name}_${speed}`}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImg}>
        <Button
          title="x"
          style={styles.button}
          onPress={() => {
            setWeather(wt => wt.filter(w => w.name !== name));
          }}
        />
        <TouchableOpacity style={styles.card}>
          <View style={styles.extraInfo}>
            <Text
              style={{
                ...styles.headerText,
                color: textColor,
                fontWeight: '800',
              }}>
              {name}
            </Text>
            <Text
              style={{
                ...styles.headerText,
                color: textColor,
                fontWeight: '800',
              }}>
              {main}
            </Text>
            <Text
              style={{
                ...styles.headerText,
                color: textColor,
                fontWeight: '700',
              }}>
              {temp} °C
            </Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.styletext}>Latitude: {lat}</Text>
            <Text style={styles.styletext}>Longitude: {lon}</Text>
            <Text style={styles.styletext}>
              Minimum Temperature: {temp_min}°C
            </Text>
            <Text style={styles.styletext}>
              Maximum Temperature: {temp_max}°C
            </Text>

            <Text style={styles.styletext}>Wind Speed: {speed} m/s</Text>
            <Text style={styles.styletext}>Pressure: {pressure}</Text>

            <Text style={styles.styletext}>Humidity: {humidity} m/s</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    // backgroundColor: 'rgba(255,0,0,0.5)',
    // borderRadius:50,
    // borderColor:'white',
    // borderWidth:1,
    // padding:1,
    // margin:4,
    fontSize:10,
    color: 'red',
    textAlign: 'center',
    alignSelf: 'flex-end',



  },
 
  container: {
    flexDirection: 'column',
    backgroundColor: 'color',
    borderRadius: 5,
  },

  card: {
    height: Dimensions.get('screen').height / 5,
    flexDirection: 'row',
    width: Dimensions.get('screen').width - 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: (10, 10, 10, 10),
    padding: (10, 10, 10, 10),
    // borderWidth:1.5,
    // borderRadius:15
  },
  backgroundImg: {
    width: Dimensions.get('screen').width - 40,
    marginBottom: 10,
    // borderWidth:10,
    borderRadius: 10,
  },
  headerText: {
    fontSize: 12,
    marginTop: 10,
  },
  extraInfo: {
    flexDirection: 'column',
    backgroundColor: 'rgba(255,255,255, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 0.5,
    padding: 10,
    margin: 10,
    width: (Dimensions.get('screen').width - 40) / 3,
  },
  info: {
    backgroundColor: 'rgba(0,0,0, 0.6)',
    padding: 10,
    borderColor: 'gray',
    borderWidth: 0.5,
    marginRight: 40,
  },
  styletext: {
    fontSize: 11,
    color: 'white',
    fontWeight: 'bold',
  },
});
