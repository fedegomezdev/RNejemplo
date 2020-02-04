import React from 'react';
import {Text, View, Image , StyleSheet} from 'react-native';

export default function Drink(props) {
  const {image} = props;

  return (
    <View style={{flex:1, alignItems:"center"}}>
      <Text style={{color:"#2a2c41", fontSize:20}}>{props.id}</Text>
      <Text style={style.text}>{props.nombre}</Text>
      <Image source={{uri: image}} style={style.imagen} />
    </View>
  );
}

const style = StyleSheet.create({
  text: {
    color: '#2a2c41',    
    marginBottom:15,
    fontWeight:'bold',
    fontSize:20,
  },
  imagen : {
    width: 200,
    height:200,
    marginBottom:30,
    borderRadius:30
  }
})