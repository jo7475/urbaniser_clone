import React, {FC, useState} from 'react';
import {Box, HStack, Pressable, Text} from 'native-base';
import {PlusHover} from '../components/plusIconHover';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {PlacesCardBox} from '../components/placesCardBox';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';

const CollectionItemDetail: FC = ({navigation}) => {
  const [toggle, SetToggle] = useState<string>('grid');

  return (
    <Box flex={1}>
      <HStack
        height="20"
        alignItems="center"
        justifyContent="space-between"
        paddingX="4"
        shadow={3}>
        <HStack>
          <Pressable
            onPress={() => {
              navigation.navigate('Collection');
            }}>
            <MaterialIcons name="keyboard-backspace" size={30} color="black" />
          </Pressable>
          <Pressable>
            <MaterialIcons
              name="search"
              style={{left: 10}}
              color="black"
              size={25}
            />
          </Pressable>
        </HStack>

        <Text fontSize="lg" fontWeight="black">
          Manchester
        </Text>
        <AntIcon name="sharealt" size={20} color="black" />
      </HStack>
      <Box flex={1}>
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
        <PlacesCardBox />
      </Box>
      <PlusHover />
    </Box>
  );
};
export default CollectionItemDetail;
