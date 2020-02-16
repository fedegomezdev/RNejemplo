import React from 'react'
import { View, Text,Image, StyleSheet ,TouchableOpacity} from 'react-native';
//import { TouchableOpacity } from 'react-native-gesture-handler';


export default function HomeScreen({navigation}:any) {

    return (

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , backgroundColor:'#f1b950'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Drinks')}>
        <Text style={style.titulo}>WELCOME TO COKTAILS </Text>
        <Image source={require('../assets/icons/bebidas.png')} style={{width:200, height:200, alignSelf:"center"}}/>
        <Text style={style.texto}>Find your Drink </Text>
        </TouchableOpacity>
        
      </View>
    )
}

const style = StyleSheet.create({
  texto :{
      fontSize:20,
      fontWeight:'bold',
      marginBottom:15,
      alignSelf:'center',
      marginTop:25,
      color:'#201b17'
  },
  titulo : {
    fontSize:30,
    fontWeight:'bold',
    marginBottom:15,
    alignSelf:'center',
    marginTop:15,
    color:'#201b17'
  }
})