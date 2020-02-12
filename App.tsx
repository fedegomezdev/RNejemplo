/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';


import Aplication from './src/navigation/AppNavigation';

const App = () => {
  return (
    <Provider store={store}>
      <Aplication />
    </Provider>
  )
};

export default App;
