import React, { useState  } from 'react'
import { View, TextInput, StyleSheet, Dimensions ,Button} from 'react-native';
 

export default function SearchBar({ weatherData, fetchWeatherData }) {

    const [cityName, setCityName] = useState('');

    return (
        <View style={styles.searchBar}>
            <TextInput 
                placeholder='Enter City name'
                value={cityName}
                onChangeText={(text) => setCityName(text)}
            />
            <Button styles={{borderRadius:10,
            borderColor:'black',
            borderWidth:1
            }}title='+' size={28} color="black"  onPress={() => fetchWeatherData(cityName)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    searchBar: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: Dimensions.get('screen').width - 20,
        borderRadius: 15,
        borderWidth: 1.5,
        paddingVertical: 10,
       margin:10,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        borderColor: 'gray'
    }
})
