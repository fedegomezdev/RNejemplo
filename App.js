/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  StyleSheet ,
  ActivityIndicator
} from 'react-native';

import Drink from './src/components/Drink';


const App = () => {

  const [input, setInput] = useState('');
  const [info , setInfo] = useState([]);

  


  const consultarApi = async() =>{

    const data = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`)
    
    setInfo(data.data.drinks)
  
  }

  const aprobar = async () => {
    if (input.length < 3){
      console.log('te falta completar capo');
      return;
    } else {
      await consultarApi();
    }
  }


  useEffect( () => {
    
    aprobar()

  }, [input, info])
 
  if(info === null){
    return(
      <>
      <View style={styles.container}>
      <Text style={styles.text}> BEBIDAS </Text>
      <TextInput value={input} style={styles.text} onChangeText={ (text) => setInput(text) }/>
      <ActivityIndicator/>
      <Text>Es probable que este escribiendo ma</Text>
      </View>
      </>
    )
  }

  return (
    <>
    <ScrollView>
      <View style={styles.container}>
      <Text style={styles.text}> BEBIDAS </Text>
      <TextInput value={input} style={styles.text} onChangeText={ (text) => setInput(text) }/>


      
      { info.map( (dato) => { return(
        <Drink key={dato.idDrink} nombre={dato.strDrink} id={dato.idDrink} image={dato.strDrinkThumb} />
        )
      })
      }   

      </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    color: 'blue',
    fontWeight: 'bold',
  },
  text: {
    color: 'red',
    fontSize:30
  },
});


export default App;
