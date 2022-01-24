import React from 'react';
import { SvgXml } from 'react-native-svg';
import star from '../../../../assets/star';
import open from '../../../../assets/open';
import Spacer from '../../../components/spacer/Spacer-component';
import { Text } from '../../../components/typography/text-component';
import {
  Address,
  CardContainer,
  Container,
  Cover,
  Icon,
  Info,
  Rating,
  Section,
  SectionEnd,
} from './Restaurant-components-style';
import Favourite from '../../../components/favourites/favourites-components';

const RestaurentInfo = ({ restaurant = {} }) => {
  const {
    name = 'Some Restaurant',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-684x1024.jpg.webp',
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <CardContainer elevation={5}>
      <Favourite key={placeId} restaurant={restaurant} />
      <Cover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="title">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml
                key={`star-${placeId}-${i}`}
                xml={star}
                height={20}
                width={20}
              />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="medium" />
            {isOpenNow && <SvgXml xml={open} height={20} width={20} />}
            <Spacer position="left" size="medium" />
            <Icon source={{ uri: icon }} />
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </CardContainer>
  );
};

export default RestaurentInfo;
