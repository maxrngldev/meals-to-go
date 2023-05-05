import { SafeAreaView, StatusBar, View, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components';

// Components
import RestaurantInfoCard from '../components/restaurant-info-card/restaurant-info-card.component';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px;`}
`;

const SearchContainer = styled(View)`
  padding: ${props => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;

export default function RestaurantsScreen() {
  const data = [
    {
      id: 1,
      name: 'Some Restaurant',
      icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
      photos: [
        'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
      ],
      address: '100 Some Random Street',
      isOpenNow: true,
      rating: 4,
      isClosedTemporarily: true,
    },
    {
      id: 2,
      name: 'Some Restaurant',
      icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
      photos: [
        'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
      ],
      address: '100 Some Random Street',
      isOpenNow: true,
      rating: 2,
      isClosedTemporarily: false,
    },
    {
      id: 3,
      name: 'Some Restaurant',
      icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
      photos: [
        'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
      ],
      address: '100 Some Random Street',
      isOpenNow: true,
      rating: 5,
      isClosedTemporarily: true,
    },
  ];
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>

      <RestaurantList
        data={data}
        renderItem={({ item }) => <RestaurantInfoCard restaurant={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={{ padding: 16 }}
      ></RestaurantList>
    </SafeArea>
  );
}
