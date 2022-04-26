import React, {FC, useState} from 'react';

import {Box, HStack, Pressable} from 'native-base';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import {PlacesCardBox} from './placesCardBox';
import {PlacesCardList} from './placesCardList';
import {Map} from './placesCardMap';

export const MaterialTab: FC = () => {
  const [toggle, SetToggle] = useState<string>('grid');
  const listType = () => {
    if (toggle == 'grid') {
      return <PlacesCardBox />;
    } else if (toggle == 'list') {
      return <PlacesCardList />;
    } else if (toggle == 'map') {
      return <Map />;
    }
  };
  return (
    <>
      <HStack width="100%" justifyContent="center">
        <Pressable
          padding={2}
          onPress={() => {
            SetToggle('grid');
          }}>
          <SimpleIcon
            name="grid"
            size={20}
            color={toggle == 'grid' ? 'orange' : 'black'}
          />
        </Pressable>
        <Pressable
          padding={2}
          onPress={() => {
            SetToggle('list');
          }}>
          <SimpleIcon
            name="list"
            size={20}
            color={toggle == 'list' ? 'orange' : 'black'}
          />
        </Pressable>
        <Pressable
          padding={2}
          onPress={() => {
            SetToggle('map');
          }}>
          <SimpleIcon
            name="map"
            size={20}
            color={toggle == 'map' ? 'orange' : 'black'}
          />
        </Pressable>
      </HStack>
      {listType()}
    </>
  );
};
