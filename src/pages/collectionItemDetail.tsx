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
import Breakfast, {Wellness} from '../components/filters';
import All from '../components/filters';

const Tab = createMaterialTopTabNavigator();
const CollectionItemDetail: FC = ({navigation}) => {
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

        <Text fontSize="lg" fontFamily="monospace" fontWeight="medium">
          Manchester
        </Text>
        <AntIcon name="sharealt" size={20} color="black" />
      </HStack>
      <Box flex={1}>
        <Tab.Navigator
          screenOptions={{
            tabBarLabelStyle: {fontFamily: 'monospace'},
            tabBarActiveTintColor: 'orange',
            tabBarInactiveTintColor: 'black',
            tabBarIndicatorStyle: {backgroundColor: 'orange'},
          }}>
          <Tab.Screen name="All" component={All} />
          <Tab.Screen name="Breakfast" component={Breakfast} />
          <Tab.Screen name="Wellness" component={Wellness} />
        </Tab.Navigator>
        <Pressable
          position="absolute"
          borderRadius="full"
          style={{
            backgroundColor: 'orange',
            padding: 15,
            alignSelf: 'flex-end',
            bottom: 34,
            right: 20,
            elevation: 1,
            shadowColor: 'black',
          }}>
          <AntIcon name="plus" size={30} color="white" />
        </Pressable>
      </Box>
    </Box>
  );
};
export default CollectionItemDetail;
