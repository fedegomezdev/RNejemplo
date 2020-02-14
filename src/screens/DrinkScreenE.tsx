import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  ActivityIndicator,
  FlatList,
  SafeAreaView
} from 'react-native';
import Drink from '../components/Drink';
import {useDispatch, useSelector} from 'react-redux';
import {StateTypes, Drinks} from '../types/types'
import { fetching } from '../redux/actions/actions';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function DrinkScreenE() {
  
    const dispatch = useDispatch();
    const loading = useSelector(( state: StateTypes ) => state.loading)
    const drinks = useSelector((state:StateTypes)=> state.drinks)
    const [input, setInput] = useState('');
  
    

  const aprobar = () => {
    if (input.length > 3 ) {
      dispatch(fetching(input));
    }
  };

  useEffect(() => {
    aprobar();
  }, [input]);


  return (
    <>
      
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
          
          {drinks.length > 0 ? (
           
            <View style={{flex: 3, justifyContent: 'center', marginHorizontal:30}}>
              
              { loading ? (<ActivityIndicator size="large"/>): null }
              
              <FlatList
              
                data={drinks}
                keyExtractor={(item:Drinks, index:number ) => item.idDrink}
                renderItem={({ item }: any) => (
                    <TouchableOpacity key={item.idDrink}>
                    <Drink nombre={item.strDrink} image={item.strDrinkThumb}/>
                    </TouchableOpacity>
                )}
                ListEmptyComponent={emptyList}  
            />

            </View>
            
          ) : (
            <View style={{flex: 3, justifyContent: 'center', marginTop:40}}>
              
              <Text style={{marginTop: 14, fontSize:20}}>
                Drink not found
              </Text>
            </View>
          )}
        </View>
      
    </>
  );
}


const emptyList = () => (
  <View>
      <Text>
          
              'No se encontraron resultados para la búsqueda realizada.' :

      </Text>
  </View>
);

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
