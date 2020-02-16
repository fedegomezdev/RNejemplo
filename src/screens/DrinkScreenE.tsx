import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Button,
  Alert,
} from 'react-native';
import Drink from '../components/Drink';
import {useDispatch, useSelector} from 'react-redux';
import {StateTypes, Drinks} from '../types/types'
import { fetching } from '../redux/actions/actions';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function DrinkScreenE() {
  
    const dispatch = useDispatch();
    const loading = useSelector(( state: StateTypes ) => state.loading)
    const error = useSelector(( state: StateTypes ) => state.error)
    const drinks = useSelector((state:StateTypes)=> state.drinks)
    const [input, setInput] = useState('');
  
    
    console.log(error)
    console.log(input)

  const aprobar = () => {
    if (input.length > 3 ) {
      dispatch(fetching(input));
    }
  };

  useEffect(() => {
    aprobar();
  }, [input]);


  const borrar = () => {
    console.log('asdasd');
    setInput('')
  }

  return (
    <>
        
        <View style={styles.container}>
          <View style={{flex: 1}}>
            <Text style={styles.titulo}> DRINKS </Text>
            <View style={{flexDirection:"row"}}>
              <TextInput
                value={input}
                style={styles.text}  
                placeholder={'Search'}
                onChangeText={text => setInput(text)}
              />

                <Text onPress={ ()=> borrar()} 
                      style={{marginVertical:29 ,marginHorizontal:10, fontSize: 15,fontWeight: 'bold',}}>
                        CANCEL
                </Text>

            </View>
          </View>
          
          

          {drinks.length > 0  && input.length > 3 ? (
           
            <View style={{flex: 3, justifyContent: 'center', marginHorizontal:30, marginTop:17}}>
              
              { loading ? (<ActivityIndicator size="large"/>): null }
              
                {error ? <Text style={{marginTop:15, fontSize:20, fontWeight:'bold'}}>Not found </Text> :

                  <FlatList
                    data={drinks}
                    keyExtractor={(item:Drinks, index:number ) => item.idDrink}
                    renderItem={({ item }: any) => (
                        <TouchableOpacity key={item.idDrink}>
                        <Drink nombre={item.strDrink} image={item.strDrinkThumb}/>
                        </TouchableOpacity>
                    )}
                  />

              }
              
            </View>
            
          ) : (
            <View style={{flex: 3, justifyContent: 'center', marginTop:40}}>
              
              <Text style={{ fontSize:20, fontWeight:'bold'}}>
                Search your Favourite drink
              </Text>
            </View>
          )}
        </View>
      
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
    marginBottom: 20,
    marginTop: 20,
    borderColor: '#2a2c41',
    borderBottomColor: '#2a2c41',
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
