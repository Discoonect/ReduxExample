import React from 'react';
import {connect} from 'react-redux';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';
import * as actions from '../../action';
import {getLocales} from 'react-native-localize';
import i18n from '../../i18n';

const HomeScreen = ({
  value,
  updateValue,
  navigation,
  language,
  changeLanguage,
}) => {
  const onPress = () => navigation.navigate('SecondScreen');
  const onChangeText = t => updateValue(t);

  const changeKR = () => changeLanguage(getLocales()[0].languageCode);
  const changeVN = () => changeLanguage('vn');

  console.log(language);

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title="go to Second" onPress={onPress} />
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
      />
      <TextHello />
      <Button title="CHANGE KR" onPress={changeKR} />
      <Button title="CHANGE VN" onPress={changeVN} />
    </View>
  );
};

const TextHello = () => {
  return <Text>{i18n.t('hello')}</Text>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    height: 100,
    borderColor: 'black',
    borderWidth: 1.5,
  },
});

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  updateValue: value => dispatch(actions.updateValue(value)),
  changeLanguage: language => dispatch(actions.changeLanguage(language)),
});
const connectComponent = connect(mapStateToProps, mapDispatchToProps);

export default connectComponent(HomeScreen);
