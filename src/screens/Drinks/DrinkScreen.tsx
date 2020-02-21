import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import {Drink} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {StateTypes, Drinks} from '../../types/types';
import {fetching} from '../../redux/actions/actions';
//import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './style';
import color from '../../theme/palette';

const DrinkScreen = ( ) => {
  const textinput = React.useRef()
  const dispatch = useDispatch();
  const loading = useSelector((state: StateTypes) => state.loading);
  const error = useSelector((state: StateTypes) => state.error);
  const drinks = useSelector((state: StateTypes) => state.drinks);
  const [input, setInput] = useState('');

  const fetch = () => {
    if (input.length > 2) {
      dispatch(fetching(input));
    }
  };

  useEffect(() => {
    fetch();
  }, [input]);

  const cancel = () => {
    setInput('');
    textinput.current.blur()
  }

  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}> Cocktails </Text>
        <View style={styles.viewText}>
          <TextInput
            value={input}
            style={styles.inputText}
            placeholder="Search"
            onChangeText={text => setInput(text)}
            inlineImageLeft="search_icon"
            inlineImagePadding={20}
            ref={textinput}
          />
          {input.length > 0 && (
            <Text onPress={cancel} style={styles.cancel} >
              CANCEL
            </Text>
          )}
        </View>
      </View>

      {drinks.length > 0 && input.length > 2 ? (
        <View style={styles.contentDrink} >
          {loading && (
            <ActivityIndicator
              size="large"
              color={color.primary}
              style={styles.activityIndicator}
            />
          )}

          {error ? (
            <Text style={styles.textNotFound}> Not found </Text>
          ) : (
            <FlatList
              horizontal={true}
              data={drinks}
              keyExtractor={(item: Drinks) => item.idDrink}
              renderItem={({item}: {item: Drinks}) => (
                <TouchableOpacity key={item.idDrink}>
                  <Drink name={item.strDrink} image={item.strDrinkThumb} />
                </TouchableOpacity>
              )}
            />
          )}
        </View>
      ) : (
        <View style={styles.viewStart}>
          <Text style={styles.text}>Search your Favourite drink</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default DrinkScreen;
