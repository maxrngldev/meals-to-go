import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components';

// Components
import RestaurantInfoCard from '../components/restaurant-info-card.component';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px;`}
`;

const SearchContainer = styled(View)`
  padding: ${props => props.theme.space[3]};
`;

const RestaurantListContainer = styled(View)`
  padding: ${props => props.theme.space[3]};
  flex: 1;
`;

export default function RestaurantsScreen() {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>

      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  );
}
