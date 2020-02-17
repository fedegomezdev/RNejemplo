import React from 'react'
import { View, Text,Image ,TouchableOpacity} from 'react-native';
import style from "./style";

export default function HomeScreen({navigation}:any) {

    return (

        <View style={style.container}>
         
        
        <Text style={style.title}>COCKTAIL </Text>
        <Text style={style.text}>Find your Drink </Text>
        <Image source={require('../../assets/icons/cocktailicon.png')} style={style.image}/>
        <TouchableOpacity onPress={() => navigation.navigate('Drinks')}>
        <Text style={style.search}>Search</Text>
        </TouchableOpacity>
  
      </View>
    )
}
