import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  ActivityIndicator,
  FlatList
} from 'react-native';
import Drink from '../components/Drink';
import {useDispatch, useSelector} from 'react-redux';
import {StateTypes} from '../types/types'
import { fetching } from '../redux/actions/actions';


export default function DrinkScreen() {
  
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
          
          {drinks ? (
            <View style={{flex: 3, justifyContent: 'center', marginHorizontal:30}}>
              
              { loading ? (<ActivityIndicator size="large"/>): null }
              
              <FlatList
                data={drinks}
                keyExtractor={(item: { idDrink: any; }) => item.idDrink}
                renderItem={({ item }: any) => (
                    <Drink nombre={item.strDrink} image={item.strDrinkThumb} />
                )}

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
