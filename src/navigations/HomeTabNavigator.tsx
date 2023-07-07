import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  AboutScreenProps,
  HomeTabParamsList,
  InfoScreenProps,
  SettingsScreenProps,
} from '../react-navigation-types';

const InfoScreen = ({navigation, route}: InfoScreenProps) => {
  const [state, setState] = React.useState<number>(0)
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Info!</Text>
    </View>
  );
};

function SettingsScreen({}: SettingsScreenProps) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const AboutScreen: React.FC<AboutScreenProps> = ({navigation, route}) => {
  return <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
};

const Tab = createBottomTabNavigator<HomeTabParamsList>();

export default function HomeTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Info" component={InfoScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
  );
}
