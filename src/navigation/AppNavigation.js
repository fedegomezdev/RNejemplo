import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import DrinkScreen from '../screens/DrinkScreen';


const AppNavigator = createStackNavigator(
    {
      Home:{ 
        screen: HomeScreen, 
        navigationOptions: ()=> ({
          headerShown:false
      })
      },

      Drinks: {
        screen: DrinkScreen,
        navigationOptions: ()=> ({
          headerShown:false
      })
      }  
    },
    {
      initialRouteName: 'Home',
      //headerMode: 'none'
    }
  );
  

const Aplication = createAppContainer(AppNavigator);

export default Aplication;
