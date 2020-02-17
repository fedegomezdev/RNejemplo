import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  ActivityIndicator,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {Drink} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {StateTypes, Drinks} from '../../types/types'
import { fetching } from '../../redux/actions/actions';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from "./style";


export default function DrinkScreenE() {
  
    const dispatch = useDispatch();
    const loading = useSelector(( state: StateTypes ) => state.loading)
    const error = useSelector(( state: StateTypes ) => state.error)
    const drinks = useSelector((state:StateTypes)=> state.drinks)
    const [input, setInput] = useState('');
  
    
    console.log(error)
    console.log(input)

  const fetch = () => {
    if (input.length > 2 ) {
      dispatch(fetching(input));
    }
  };

  useEffect(() => {
    fetch();
  }, [input]);


  return (
    <>

        <SafeAreaView style={styles.container}>
          <View style={styles.content}>
          <Text style={styles.title}> Cocktails </Text>
            <View style={{flexDirection:"row", alignSelf:'center'}}>
              <TextInput
                value={input}
                style={styles.inputText}  
                placeholder={'Search'}
                onChangeText={text => setInput(text)}
                inlineImageLeft="search_icon"
                inlineImagePadding={20}
              />
              {input.length > 0 && (
                <Text onPress={ ()=> setInput('')} 
                  style={styles.cancel}>
                  CANCEL
                </Text>
              )}
                

            </View>
          </View>
          
          

          {drinks.length > 0  && input.length > 2 ? (
           
            <View style={styles.contentDrink}>
              
              { loading ? (<ActivityIndicator size="large" color={'#f1b950'} style={{marginTop:25}}/>): null }
              
                {error ? 
                    <Text style={{marginTop:15, fontSize:20, fontWeight:'bold'}}> Not found </Text> 
                  :                 
                    <FlatList                  
                      horizontal={true}
                      data={drinks}
                      keyExtractor={(item:Drinks) => item.idDrink}
                      renderItem={({ item }: any) => (
                          <TouchableOpacity key={item.idDrink}>
                              <Drink name={item.strDrink} image={item.strDrinkThumb}/>
                          </TouchableOpacity>
                        )}
                    />
                }
              
            </View>
            
          ) : (
            <View style={{flex: 3, justifyContent: 'center', marginTop:40}}>             
              <Text style={styles.text}>
                Search your Favourite drink
              </Text>
            </View>
          )}
        </SafeAreaView>
       
    </>
  );
}

