import React from 'react';
import {Text, Image , StyleSheet} from 'react-native';


type Props = {
  nombre : string,
  image: string
}

export default function Drink({nombre, image }: Props) {
 

  return (
      <>
      <Text style={style.text}>{nombre}</Text>
      <Image source={{uri: image}} style={style.imagen} />
      </>
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
    width: 350,
    height:200,
    marginBottom:30,
    borderRadius:30
  }
})