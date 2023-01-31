import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { Searchbar } from 'react-native-paper';

// Components
import RestaurantInfoCard from '../components/restaurant-info-card.component';

export default function RestaurantsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar />
      </View>

      <View style={styles.list}>
        <RestaurantInfoCard />
      </View>
    </SafeAreaView>
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
