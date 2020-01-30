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
  ScrollView 
} from 'react-native';


const App = () => {

  const [url, seturl] = useState('');
  const [nombre, setNombre]= useState('');
  const [foto , setFoto] = useState('');
  const [id, setId]= useState('');
  const [info , setInfo] = useState([]);


  const consultarApi = async()=>{
    const data = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${url}`)
    setInfo(data.data.drinks)
    setNombre(data.data.drinks[0].strDrink)
    setFoto(data.data.drinks[0].strDrinkThumb)
    setId(data.data.drinks[0].idDrink)
    
  }

  const aprobar = async () => {
    if (url.length < 3){
      console.log('te falta completar capo');
      return;
    } else {
      await consultarApi();
    }
  }


  useEffect(() => {
    aprobar()
  }, [url])
 


  return (
    <>
    <ScrollView>
      <View>
      <Text>Cocktails !</Text>
      <TextInput onChangeText={ (text) => seturl(text) }/>
      <Text>{nombre}</Text>
      <Text>id : {id} </Text>
      <Image source={{uri : foto}}  style={{width: 200, height: 200}}/>

      
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

function Drink(props){
  const {image} = props;
  return(
    <View>
    <Text>{props.id}</Text>
    <Text>{props.nombre}</Text>
    <Image source={{uri : image}}  style={{width: 200, height: 200}}/>
    </View>
  )
}

export default App;
