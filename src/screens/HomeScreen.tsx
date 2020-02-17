import React from 'react'
import { View, Text,Image, StyleSheet ,TouchableOpacity, ImageBackground} from 'react-native';
//import { TouchableOpacity } from 'react-native-gesture-handler';


export default function HomeScreen({navigation}:any) {

    return (

        <View style={style.container}>
         
        
        <Text style={style.titulo}>COCKTAIL </Text>
        <Text style={style.texto}>Find your Drink </Text>
        <Image source={require('../assets/icons/cocktailicon.png')} style={style.image}/>
        <TouchableOpacity onPress={() => navigation.navigate('Drinks')}>
        <Text style={style.search}>Search</Text>
        </TouchableOpacity>
  
      </View>
    )
}

const style = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',    
      backgroundColor:'#f1b950',
      borderBottomLeftRadius:100,
      borderTopRightRadius:100,
  },
  texto :{
      fontSize:20,
      fontWeight:'bold',
      marginBottom:100,
      alignSelf:'flex-start',
      marginTop:10,
      color:'#201b17',
      marginLeft:50

  },
  titulo : {
    fontSize:60,
    fontWeight:'bold',    
    marginTop:35,
    color:'#201b17',
    borderBottomColor:'#201b17',
    borderBottomWidth:3
  },
  search: {
    backgroundColor: 'white',
    color: '#201b17',
    borderRadius: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize:  27,
    marginTop:150,
    paddingVertical:20,
    paddingHorizontal:60
  },
  image: {
    width:200,
    height:200,
    marginLeft:15
  }
})