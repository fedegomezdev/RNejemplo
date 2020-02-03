import React from 'react'
import { View, Text, Button } from 'react-native';

export default function HomeScreen({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , backgroundColor:'black'}}>
        <Text style={{color:'white'}}> COCKTAILS </Text>
        <Button
          title="Buscar!"
          onPress={() => navigation.navigate('Drinks')}
        />
      </View>
    )
}

