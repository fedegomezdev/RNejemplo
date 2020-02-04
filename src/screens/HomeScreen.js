import React from 'react'
import { View, Text, Button, Image } from 'react-native';

export default function HomeScreen({navigation}) {


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , backgroundColor:'#f4f4f8'}}>
        <Text style={{color:'#2a2c41'}}> COCKTAILS </Text>
        <Button
          title="Buscar!"
          onPress={() => navigation.navigate('Drinks')}
        />
        <Image source={require('../assets/icons/bebidas.png')} style={{width:200, height:200}}/>
      </View>
    )
}

