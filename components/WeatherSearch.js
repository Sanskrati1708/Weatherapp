import React ,{useState, useEffect} from 'react';
import {View, Text, ImageBackground,ScrollView, Dimensions} from 'react-native';
import { StyleSheet } from 'react-native';
import {snow,haze,sunny,rainy,clouds,smoke,mist,dust,fog,sand,ash,squall,tornado} from '../assets/backgroundimg/images';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { SwipeListView } from 'react-native-swipe-list-view';

export default function WeatherSearch({weather}){
    const [wt,swt]=useState(weather)
  
    // console.log(del('Agra'))
    
    return(
        
    <ScrollView>
    {
    wt.map((weatherData)=>{
         const [backgroundImage, setBackgroundImage] = useState(null);
             const { weather,
                     name,
                     coord: {lon,lat},
                     main: { temp, temp_min,temp_max,pressure,humidity },
                     wind: { speed }
             } = weatherData;
             const [{ main }] = weather;
         
             useEffect(() => {
                 setBackgroundImage(getBackgroundImg(main));
             }, [weatherData])
         
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
             
            
             return (
                 <View style={styles.container}>
                     
                     <ImageBackground 
                         source={backgroundImage}
                         style={styles.backgroundImg}
                     >
                         <Button title='Delete' style={styles.button} onPress={(name)=>{
                             swt(wt.filter(w=>w.name!==name))
                        console.log(wt)
                    }
                    }
                        ></Button>
                         <TouchableOpacity style={styles.card} >
                         
                         <View style={styles.extraInfo}>
                             <Text style={{ ...styles.headerText, color: textColor, fontWeight: '900'}}>{name}</Text>
                             <Text style={{ ...styles.headerText, color: textColor, fontWeight: '800'}}>{main}</Text>
                             <Text style={{ ...styles.headerText, color: textColor,fontWeight:'800'}}>{temp} °C</Text>
                         </View>
                         <View style={styles.info}>
                                 <Text style={styles.styletext}>Latitude: {lat}</Text>
                                 <Text style={styles.styletext}>Longitude: {lon}</Text>
                                 <Text style={styles.styletext}>Minimum Temperature: {temp_min}°C</Text>
                                 <Text style={styles.styletext}>Maximum Temperature: {temp_max}°C</Text>
         
                                 <Text style={styles.styletext}>Wind Speed: {speed} m/s</Text>
                                 <Text style={styles.styletext}>Pressure: {pressure}</Text>
         
                                 <Text style={styles.styletext}>Humidity: {humidity} m/s</Text>
                         </View>
                        
                         
                     
         </TouchableOpacity>
                     </ImageBackground>
                     </View>
             );
         }
         
    )}
</ScrollView>
    );
    // function del(n){
    //     const update=wt.filter(w=>w.name!==n)
    //     console.log(wt);
    //     console.log(n);
    //     swt(update)
    // }
}
const styles = StyleSheet.create({
    button:{
        backgroundColor:'red',
        borderWidth:0.1,
        borderColor:'white',
        borderRadius:5,
        color:'white',
        textAlign:"center",
        alignSelf:'flex-end',
        
        
    },
    container:{
        flexDirection:'column',
        backgroundColor:'color',
        borderRadius:5
    },


    card:{
        height:Dimensions.get('screen').height/5,
        flexDirection:'row',
        width: Dimensions.get('screen').width-20,
        justifyContent:'center',
        alignItems:'center',
        margin:(10,10,10,10),
        padding:(10,10,10,10),
        // borderWidth:1.5,
        // borderRadius:15
        
    },
    backgroundImg: {
        
        width: Dimensions.get('screen').width-40,
        marginBottom:10,
        // borderWidth:10,
        borderRadius:10
        
        
        
    },
    headerText: {
        fontSize: 12,
        marginTop: 10,
    },
    extraInfo: {
        flexDirection: 'column',
        borderRadius:5,
        backgroundColor:'rgba(255,255,255, 0.8)',
        alignItems:'center',
        justifyContent:"center",
        borderRadius:10,
        borderColor:'white',
        borderWidth:0.5,
        padding:10,
        margin:10,
        width: (Dimensions.get('screen').width-40)/3,


    },
    info: {
        backgroundColor: 'rgba(0,0,0, 0.6)',
        padding: 10,
        borderColor:'gray',
        borderWidth:0.5,
        marginRight:40,
        
    },
    styletext:{
        fontSize: 11, color: 'white' ,fontWeight: 'bold'
    }
});