import React from 'react';
import {Text, Image} from 'react-native';
import style from './styles';

type Props = {
  name: string;
  image: string;
};

const Drink = ({name, image}: Props) => {
  return (
    <>
      <Text style={style.text}>{name}</Text>
      <Image source={{uri: image}} style={style.image} />
    </>
  );
};

export default Drink;
