import React from 'react';
import {View, Text, Image, TouchableOpacity, StatusBar} from 'react-native';
import style from './style';
const image = require('../../assets/icons/cocktailicon.png');
import color from '../../theme/palette';

const HomeScreen = ({navigation}: any) => {
  const navigate = () => navigation.navigate('Drinks');

  return (
    <View style={style.container}>
      <StatusBar backgroundColor={color.primary} barStyle="light-content" />
      <Text style={style.title}>COCKTAIL </Text>
      <Text style={style.text}>Find your Drink </Text>
      <Image source={image} style={style.image} />
      <TouchableOpacity onPress={navigate}>
        <Text style={style.search}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
