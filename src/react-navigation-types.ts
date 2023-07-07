import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamsList = {
  Screen1: undefined;
  Screen2: NavigatorScreenParams<HomeTabParamsList>;
};

export type HomeTabParamsList = {
  Info: undefined;
  Settings: undefined;
  About: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamsList> =
  NativeStackScreenProps<RootStackParamsList, T>;

export type HomeTabBarScreenProps<T extends keyof HomeTabParamsList> =
  CompositeScreenProps<
    BottomTabScreenProps<HomeTabParamsList, T>,
    RootStackScreenProps<keyof RootStackParamsList>
  >;

export type Screen1Props = RootStackScreenProps<'Screen1'>;

export type Screen2Props = RootStackScreenProps<'Screen2'>;

export type InfoScreenProps = HomeTabBarScreenProps<'Info'>;
export type SettingsScreenProps = HomeTabBarScreenProps<'Settings'>;
export type AboutScreenProps = HomeTabBarScreenProps<'About'>;
