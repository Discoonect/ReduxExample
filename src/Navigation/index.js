import React, {useEffect} from 'react';
import {HomeScreen, SecondScreen} from '../screens';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as actions from '../action';
import {connect} from 'react-redux';
import {getLocales} from 'react-native-localize';

const Stack = createStackNavigator();

const Navigation = ({changeLanguage}) => {
  useEffect(() => {
    changeLanguage(getLocales()[0].languageCode);
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SecondScreen" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  changeLanguage: language => dispatch(actions.changeLanguage(language)),
});
const connectComponent = connect(mapStateToProps, mapDispatchToProps);

export default connectComponent(Navigation);
