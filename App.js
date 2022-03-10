import React from 'react';
import 'react-native-gesture-handler';
import Navigation from './src/Navigation';
import {LogBox} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './src/reducer';
import i18n from './src/i18n';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const store = createStore(reducer);

console.log(i18n.locale);

export default () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};
