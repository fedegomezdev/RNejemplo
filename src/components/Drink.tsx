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
    fontSize:25,
    marginTop:15
  },
  imagen : {
    width: 310,
    height:400,
    borderRadius:30,
    marginRight:15,
    
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
  }
})