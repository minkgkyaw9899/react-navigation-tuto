import {Button, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {Screen1Props} from '../react-navigation-types';

const Screen1: FC<Screen1Props> = ({navigation, route}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Screen1</Text>
      <Button
        title="Go to screen 2"
        onPress={() => navigation.navigate('Screen2', {name: 'Mg Mg', age: 23})}
      />
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({});
