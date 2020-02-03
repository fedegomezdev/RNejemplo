import React from 'react';
import {Text, View, Image , StyleSheet} from 'react-native';

export default function Drink(props) {
  const {image} = props;

  return (
    <View>
      <Text style={style.text}>{props.id}</Text>
      <Text style={style.text}>{props.nombre}</Text>
      <Image source={{uri: image}} style={{width: 200, height: 200}} />
    </View>
  );
}

const style = StyleSheet.create({
  text: {
    color: 'white'
  }
})