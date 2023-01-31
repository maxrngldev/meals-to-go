import React, { Fragment } from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

// Screens
import RestaurantsScreen from './src/features/restaurants/screens/restaurants.screen';

export default function App() {
  return (
    <Fragment>
      <RestaurantsScreen />
      <ExpoStatusBar style='auto' />
    </Fragment>
  );
}

const styles = StyleSheet.create({});
