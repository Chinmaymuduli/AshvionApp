import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import PrivateRoutes from '@navigation/private';

const Routes = () => {
  return (
    <NavigationContainer>
      <PrivateRoutes />
    </NavigationContainer>
  );
};

export default Routes;

const styles = StyleSheet.create({});
