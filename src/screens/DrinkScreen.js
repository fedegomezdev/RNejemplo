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
        <View style={{flex:1}}>
          <Text style={styles.titulo}> BEBIDAS </Text>
          <TextInput value={input} style={styles.text} placeholder={"Search"} onChangeText={ (text) => setInput(text) }/>
        </View>
        <View style={{flex:3,  justifyContent:'center'}}>
          <ActivityIndicator/>
          <Text style={{marginTop:14}}>Es probable que este escribiendo mal</Text>
       </View>
       </View>
       </>
    )
   }

  return (
    <>
      <ScrollView >
        <View style={styles.container}>
          <View style={{flex:1}}> 
            <Text style={styles.titulo}> DRINKS </Text>
            <TextInput value={input} style={styles.text} placeholder={"Search"} onChangeText={ (text) => setInput(text) }/>
          </View>

          <View style={{flex:3, justifyContent:'center'}}> 
          { info.map( (dato) => { return(
            <Drink key={dato.idDrink} nombre={dato.strDrink} id={dato.idDrink} image={dato.strDrinkThumb} />
            )
          })
          }   
          </View>
        </View>
      </ScrollView> 
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#f4f4f8',
    color: '#2a2c41',
    fontWeight: 'bold',
  },
  text: { 
    color: '#2a2c41',
    fontSize:20,
    fontWeight: 'bold',
    marginBottom:15,
    marginTop:20,
    borderColor: '#2a2c41', 
    borderBottomColor:"#2a2c41",
    alignSelf:'flex-start'
  },
  titulo: {
    fontSize:30,
    fontWeight:'bold',
    color:'#2a2c41'
  }
});
    

