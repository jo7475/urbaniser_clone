import React, {FC, useState} from 'react';
import {Box, HStack, Pressable} from 'native-base';
import {Text} from 'react-native-svg';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import {PlacesCardBox} from './placesCardBox';
import {PlacesCardList} from './placesCardList';
import {MaterialTab} from './materialTab';
const All: FC = () => {
  return (
    <Box>
      <MaterialTab />
    </Box>
  );
};
export default All;
export const Breakfast: FC = () => {
  return (
    <Box>
      <MaterialTab />
    </Box>
  );
};
export const Wellness: FC = () => {
  return (
    <Box>
      <MaterialTab />
    </Box>
  );
};
