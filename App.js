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
  TextInput 
} from 'react-native';


const App = () => {

  const [url, seturl] = useState('');
  const [nombre, setNombre]= useState('');

  const consultarApi = async()=>{
    const data = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${url}`)
    setNombre(data.data.drinks[0].strDrink)
  }

  const aprobar = async () => {
    if (url.length < 3){
      console.log('te falta completar capo');
      return;
    } else {
      await consultarApi();
    }
  }


  //axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=%{}`)
  useEffect(() => {
    aprobar()
  }, [url])
 


  return (
    <>
      <Text>Hola</Text>
      <TextInput onChangeText={ (text) => seturl(text) }/>
      <Text>{nombre}</Text>
    </>
  );
};



export default App;
