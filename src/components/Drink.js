import React from 'react';
import {Text, View, Image} from 'react-native';

export default function Drink(props) {
  const {image} = props;

  return (
    <View>
      <Text>{props.id}</Text>
      <Text>{props.nombre}</Text>
      <Image source={{uri: image}} style={{width: 200, height: 200}} />
    </View>
  );
}
