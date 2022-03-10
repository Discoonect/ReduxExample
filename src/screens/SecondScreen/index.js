import React from 'react';
import {View, Text, StyleSheet, FlatList, Button} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../../action';

const SecondScreen = ({value, clearValue}) => {
  const onPress = () => clearValue();
  return (
    <View style={styles.container}>
      <Text>Second Screen</Text>
      <Text>{value}</Text>
      <Button title="CLEAR" onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  clearValue: () => dispatch(actions.clearValue()),
});
const connectComponent = connect(mapStateToProps, mapDispatchToProps);

export default connectComponent(SecondScreen);
