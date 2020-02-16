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
  Platform,
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

  const fetch = () => {
    if (input.length > 3 ) {
      dispatch(fetching(input));
    }
  };

  useEffect(() => {
    fetch();
  }, [input]);


  return (
    <>

        <SafeAreaView style={styles.container}>
          <View style={{flex: 1, backgroundColor:'#f1b950', alignSelf:'stretch', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
          <Text style={styles.titulo}> Cocktails </Text>
            <View style={{flexDirection:"row", alignSelf:'center'}}>
              <TextInput
                value={input}
                style={styles.text}  
                placeholder={'Search'}
                onChangeText={text => setInput(text)}
                inlineImageLeft="search_icon"
                inlineImagePadding={20}
              />
              {input.length > 0 && (
                <Text onPress={ ()=> setInput('')} 
                  style={{marginVertical:33 ,marginHorizontal:10, fontSize: 15,fontWeight: 'bold', color:'#201b17'}}>
                  CANCEL
                </Text>
              )}
                

            </View>
          </View>
          
          

          {drinks.length > 0  && input.length > 3 ? (
           
            <View style={{flex: 3, justifyContent: 'center', marginHorizontal:30, marginTop:17}}>
              
              { loading ? (<ActivityIndicator size="large"/>): null }
              
                {error ? 
                  <Text style={{marginTop:15, fontSize:20, fontWeight:'bold'}}>Not found </Text> 
                :
                 
                  <FlatList
                  
                    horizontal={true}
                    data={drinks}
                    keyExtractor={(item:Drinks) => item.idDrink}
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
              
              <Text style={{ fontSize:20, fontWeight:'bold', color:'#201b17'}}>
                Search your Favourite drink
              </Text>
            </View>
          )}
        </SafeAreaView>
       
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
    color: '#786a5d',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 20,
    borderColor: '#2a2c41',
    borderBottomColor: '#2a2c41',
    backgroundColor: '#f4f4f8',
    width: 230,
    borderRadius: 10,
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#201b17',
    alignSelf: 'center',
    paddingTop:15
  },
});
