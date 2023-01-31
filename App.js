import React, { Fragment } from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';

export default function App() {
  return (
    <Fragment>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Text>Search asdsa</Text>
        </View>

        <View style={styles.list}>
          <Text>List</Text>
        </View>
      </SafeAreaView>

      <ExpoStatusBar style='auto' />
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
    backgroundColor: 'green',
  },
  list: {
    padding: 16,
    backgroundColor: 'blue',
    flex: 1,
  },
});
