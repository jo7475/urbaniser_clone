import React, {FC, useState} from 'react';
import {Box, HStack, Pressable, Text} from 'native-base';
import {PlusHover} from '../components/plusIconHover';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {PlacesCardBox} from '../components/placesCardBox';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import {PlacesCardList} from '../components/placesCardList';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Breakfast from '../components/materialTabs/breakfast';
import All from '../components/materialTabs/all';

const Tab = createMaterialTopTabNavigator();
const CollectionItemDetail: FC = ({navigation}) => {
  const [toggle, SetToggle] = useState<string>('grid');
  const listType = () => {
    if (toggle == 'grid') {
      return <PlacesCardBox />;
    } else if (toggle == 'list') {
      return <PlacesCardList />;
    }
  };

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

        <Text fontSize="lg" fontWeight="medium">
          Manchester
        </Text>
        <AntIcon name="sharealt" size={20} color="black" />
      </HStack>
      <Box flex={1}>
        <Tab.Navigator>
          <Tab.Screen name="All" component={All} />
          <Tab.Screen name="Breakfast" component={Breakfast} />
        </Tab.Navigator>
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
      </Box>
      <PlusHover />
    </Box>
  );
};
export default CollectionItemDetail;
