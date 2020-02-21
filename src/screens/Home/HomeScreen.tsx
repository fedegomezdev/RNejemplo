import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import style from './style';
const image = require('../../assets/icons/cocktailicon.png');

const HomeScreen = ({navigation}: any) => {

  const navigate = () => navigation.navigate('Drinks')

  return (
    <View style={style.container}>
      <Text style={style.title}>COCKTAIL </Text>
      <Text style={style.text}>Find your Drink </Text>
      <Image source={image} style={style.image} />
      <TouchableOpacity onPress={ navigate }>
        <Text style={style.search}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
