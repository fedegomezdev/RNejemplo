import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {Drink} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {StateTypes, Drinks} from '../../types/types';
import {fetching} from '../../redux/actions/actions';
import styles from './style';
import color from '../../theme/palette';

const DrinkScreen = () => {
  const textInput = React.useRef();
  const dispatch = useDispatch();
  const loading = useSelector((state: StateTypes) => state.loading);
  const error = useSelector((state: StateTypes) => state.error);
  const drinks = useSelector((state: StateTypes) => state.drinks);
  const [input, setInput] = useState('');

  useEffect(() => {
    input.length > 2 && dispatch(fetching(input));
  }, [input]);

  const cancel = () => {
    setInput('');
    (textInput as any).current.blur();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={color.primary} barStyle="light-content" />
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
            ref={textInput}
          />

          {input.length > 0 ? (
            <Text onPress={cancel} style={styles.cancel}>
              CANCEL
            </Text>
          ) : (
            <Text style={styles.cancelDisabled}>CANCEL</Text>
          )}
        </View>
      </View>

      <View style={styles.contentDrink}>
        {loading && (
          <ActivityIndicator
            size="large"
            color={color.primary}
            style={styles.activityIndicator}
          />
        )}

        {error !== '' ||
          (!drinks && input.length > 2 && (
            <Text style={styles.textNotFound}>
              An error ocurred {error.toString()}
              Please try another drink
            </Text>
          ))}

        {input.length > 2 && error === '' && (
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

        {input.length <= 0 && (
          <View style={styles.viewStart}>
            <Text style={styles.text}>Search your Favourite drink</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default DrinkScreen;
