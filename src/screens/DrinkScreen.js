import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import Drink from '../components/Drink';

export default function DrinkScreen() {
  const [input, setInput] = useState('');
  const [info, setInfo] = useState([]);
  const [isLoading, setLoading] = useState(true);

  console.log(input);

  const consultarApi = async () => {
    const data = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`,
    );

    setInfo(data.data.drinks);
    setLoading(false);
  };

  const aprobar = () => {
    if (input.length < 3 ) {
      
      console.log('Minimun 3');
      setInfo(null)
      return;
    } else {
      consultarApi();
    }
  };

  useEffect(() => {
    aprobar();
  }, [input]);


  return (
    <>
      <ScrollView style={{backgroundColor: '#f4f4f8', paddingVertical: 10}}>
        <View style={styles.container}>
          <View style={{flex: 1}}>
            <Text style={styles.titulo}> DRINKS </Text>
            <TextInput
              value={input}
              style={styles.text}
              placeholder={'Search'}
              onChangeText={text => setInput(text)}
            />
          </View>
          
          {info ? (
            <View style={{flex: 3, justifyContent: 'center', marginHorizontal:30}}>
              {isLoading ? (<ActivityIndicator size="large"/>): null }
              {info.map(dato => {
                return (
                  <Drink
                    key={dato.idDrink}
                    nombre={dato.strDrink}
                    id={dato.idDrink}
                    image={dato.strDrinkThumb}
                  />
                );
              })}
            </View>
          ) : (
            <View style={{flex: 3, justifyContent: 'center', marginTop:40}}>
              
              <Text style={{marginTop: 14, fontSize:20}}>
                Drink not found
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f8',
    color: '#2a2c41',
    fontWeight: 'bold',
  },
  text: {
    color: '#2a2c41',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 20,
    borderColor: '#2a2c41',
    borderBottomColor: '#2a2c41',
    alignSelf: 'flex-start',
    alignSelf: 'stretch',
    backgroundColor: 'grey',
    width: 230,
    borderRadius: 10,
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2a2c41',
    alignSelf: 'center',
  },
});
