import { SvgXml } from 'react-native-svg';

import { Text } from '../../../../components/typography/text.component';

import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  SectionEnd,
  Rating,
  Address,
  Icon,
} from './restaurant-info-card.styles';

// Assets
import star from '../../../../../assets/star';
import open from '../../../../../assets/open';

export default function RestaurantInfoCard({ restaurant }) {
  const {
    rating,
    name,
    photos,
    isClosedTemporarily,
    isOpenNow,
    icon,
    address,
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.ceil(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant='label'>{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((el, idx) => (
              <SvgXml key={idx} xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant='error'>CLOSED TEMPORARILY</Text>
            )}
            {isOpenNow && (
              <SvgXml
                style={{ marginLeft: 16 }}
                xml={open}
                width={20}
                height={20}
              />
            )}

            <Icon source={{ uri: icon }} />
          </SectionEnd>
        </Section>

        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
}
