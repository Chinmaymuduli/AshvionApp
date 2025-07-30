import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {PrivateRoutesTypes} from './types';
import {PRIVATE} from '@screens';

const Stack = createNativeStackNavigator<PrivateRoutesTypes>();

type PrivateRouteProps = {
  initialRouteName?: keyof PrivateRoutesTypes;
};

export default function PrivateRoutes({initialRouteName}: PrivateRouteProps) {
  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name="TabLayout" component={TabLayout} /> */}
      <Stack.Screen name="HomeScreen" component={PRIVATE.HomeScreen} />
    </Stack.Navigator>
  );
}
