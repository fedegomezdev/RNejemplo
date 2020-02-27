import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {HomeScreen, DrinkScreen} from '../screens';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        headerShown: false,
      }),
    },

    Drinks: {
      screen: DrinkScreen,
      navigationOptions: () => ({
        headerShown: false,
      }),
    },
  },
  {
    initialRouteName: 'Home',
    //headerMode: 'none'
  },
);

const Aplication = createAppContainer(AppNavigator);

export default Aplication;
