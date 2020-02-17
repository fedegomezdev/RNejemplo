import React from 'react';
import {Text, Image } from 'react-native';
import style from "./styles";

type Props = {
  name : string,
  image: string
}

export default function Drink({name, image }: Props) {
 

  return (
      <>
      <Text style={style.text}>{name}</Text>
      <Image source={{uri: image}} style={style.imagen} />
      </>
  );
}
