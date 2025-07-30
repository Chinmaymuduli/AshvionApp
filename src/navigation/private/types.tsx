import {CompositeNavigationProp} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {PRIVATE} from '@screens';

export type BottomTabsTypes = {
  //   Feeds: undefined;
};

type PrivateScreens = {
  [key in keyof typeof PRIVATE]: undefined;
};

type OmittedScreens = '';
//   | 'HomeScreen'

export type PrivateNavigationProp = Omit<PrivateScreens, OmittedScreens> & {
  // OtpScreen: {
  //   token: string;
  // };
};

export type PrivateRoutesTypes = {
  TabLayout: undefined;
} & PrivateNavigationProp;

export type PrivateScreenProps = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabsTypes>,
  NativeStackNavigationProp<PrivateRoutesTypes>
>;
