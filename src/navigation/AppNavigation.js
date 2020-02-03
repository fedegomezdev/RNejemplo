import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import DrinkScreen from '../screens/DrinkScreen';


const AppNavigator = createStackNavigator(
    {
      Home: HomeScreen,
      Drinks: DrinkScreen,
    },
    {
      initialRouteName: 'Home',
    }
  );
  
  
const Aplication = createAppContainer(AppNavigator);

export default Aplication;
