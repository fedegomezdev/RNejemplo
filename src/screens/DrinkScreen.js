import React, {useState, useEffect} from 'react'
import { View, Text, Button, StyleSheet, ScrollView, TextInput, ActivityIndicator } from 'react-native';
import axios from 'axios';
import Drink from '../components/Drink';

export default function DrinkScreen() { 
    
    
    const [input, setInput] = useState('');
    const [info , setInfo] = useState([]);
    const [isLoading, setLoading] = useState(true)
  


   const consultarApi = async() =>{

    const data = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`)
  
     setInfo(data.data.drinks)
     setLoading(false)
   }

   const aprobar =  () => {
     if (input.length < 3){
       console.log('te falta completar capo');
       return;
     } else {
         consultarApi();
     }
    }

   useEffect( () => {
    
     aprobar()

   }, [input, info])
 
   if(info === null ){
     return(
       <>
       <View style={styles.container}>
       <Text style={styles.text}> BEBIDAS </Text>
        <TextInput value={input} style={styles.text} onChangeText={ (text) => setInput(text) }/>
       <ActivityIndicator/>
       <Text>Es probable que este escribiendo mal</Text>
       </View>
       </>
    )
   }

  return (
    <>
    <ScrollView >
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
    flex:1,
    justifyContent:'center',
    textAlign:'center',
    backgroundColor:'black',
    color: 'blue',
    fontWeight: 'bold',
  },
  text: { 
    color: 'white',
    fontSize:30
  },
});
    

