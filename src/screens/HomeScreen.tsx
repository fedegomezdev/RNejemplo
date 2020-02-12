import React from 'react'
import { View, Text,Image, StyleSheet ,TouchableOpacity} from 'react-native';
//import { TouchableOpacity } from 'react-native-gesture-handler';


export default function HomeScreen({navigation}:any) {

    return (

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , backgroundColor:'#f4f4f8'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Drinks')}>
        <Image source={require('../assets/icons/bebidas.png')} style={{width:200, height:200}}/>
        <Text style={style.texto}>COCKTAILS </Text>
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
      marginTop:15
  }
})