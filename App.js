import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import {Provider} from 'react-redux';
import ReduxPromise from 'redux-promise';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './src/reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const store = createStoreWithMiddleware(rootReducer);

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  </Provider>
);

export default App;
