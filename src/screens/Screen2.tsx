import {Button, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {Screen2Props} from '../react-navigation-types';

const Screen2: FC<Screen2Props> = ({navigation, route}) => {
  const {name, age} = route.params;
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>
        Screen2, {name}, {age}
      </Text>
      <Button title="Go to screen 1" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({});
