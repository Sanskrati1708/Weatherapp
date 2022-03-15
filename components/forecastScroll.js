import React from "react";
import {View,Text,ScrollView,Image,StyleSheet} from 'react-native'
import { white } from "react-native-paper/lib/typescript/styles/colors";
import { logo } from "../assets/backgroundimg/images";
import moment from'moment-timezone'
export default ForecastScroll=({forecast})=>{
    // console.log(forecast.daily[1].temp.day)
    return(
<ScrollView style={styles.bg} horizontal={true}>
<FutureForcast data={forecast.daily[0]}/>
<FutureForcast data={forecast.daily[1]}/>
<FutureForcast data={forecast.daily[2]}/>
<FutureForcast data={forecast.daily[3]}/>
<FutureForcast data={forecast.daily[4]}/>
<FutureForcast data={forecast.daily[5]}/>
<FutureForcast data={forecast.daily[6]}/>
<FutureForcast data={forecast.daily[7]}/>
</ScrollView>
    );
}
const FutureForcast=(data)=>{
    // console.log(data.data);
    return(
    
        <View style={styles.container}>
             <Text style={styles.day}>{moment(data.data.dt*1000).format('ddd')}</Text>
             <Image source={logo} style={styles.img}/>
             <Text style={styles.temp}>Night:{data.data.temp.night}°C</Text>
            <Text style={styles.temp}>Day:{data.data.temp.day}°C</Text>
            <Text style={styles.main}>{data.data.weather[0].main}</Text>
            <Text style={styles.temp}>Humidity:{data.data.humidity}</Text>
            <Text style={styles.temp}>Pressure:{data.data.pressure}</Text>

        </View>
    )
}
const styles=StyleSheet.create({
    bg:
    {
backgroundColor:'rgba(0,0,0, 0.3)',
// padding:10,

    },
    main:{
        backgroundColor:'rgba(0,0,0,0.4)',
        color:'white',
        fontSize:16,
        fontWeight:'bold',
        padding: 5,
        borderRadius:2,
        borderWidth:0.5,
        borderColor:'white',
        margin:5
    },

    img:{
        width:40,
        height:30,
    },
    container:{
        alignItems:'center',
        justifyContent:"center",
        borderRadius:10,
        borderColor:'white',
        borderWidth:1,
        padding:20,
        margin:20
    },
    day:{
        backgroundColor:'gray',
        borderWidth:1,
        borderColor:'white',
        borderRadius:5,
        fontSize:20,
        color:'white',
       
        padding:10,
        textAlign:"center",
        fontWeight:'500',
        marginBottom:15
    },
    temp:
    {
fontSize:16,
color:'white',
fontWeight:'500',
textAlign:'center'
    }
})