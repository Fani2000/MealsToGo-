import React from 'react';
import { SvgXml } from 'react-native-svg';
import star from '../../../../assets/star';
import open from '../../../../assets/open';
import Spacer from '../../../components/spacer/Spacer-component';
import { Text } from '../../../components/typography/text-component';
import {
  CardContainer,
  Container,
  Cover,
  Icon,
  Info,
  Rating,
  Section,
  SectionEnd,
} from './Restaurant-components-style';

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
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <Container>
      <CardContainer elevation={5}>
        <Cover key={name} source={{ uri: photos[0] }} />
        <Info>
          <Text variant="title">{name}</Text>
          <Section>
            <Rating>
              {ratingArray.map((el, i) => (
                <SvgXml key={i} xml={star} height={20} width={20} />
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
          <Text variant="label">{address}</Text>
        </Info>
      </CardContainer>
    </Container>
  );
};

export default RestaurentInfo;
