import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import DrinkScreenE from '../screens/DrinkScreenE';


const AppNavigator = createStackNavigator(
    {
      Home:{ 
        screen: HomeScreen, 
        navigationOptions: ()=> ({
          headerShown:false
      })
      },

      Drinks: {
        screen: DrinkScreenE,
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
