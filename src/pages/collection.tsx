import React, {FC, useState} from 'react';
import {
  Box,
  HStack,
  Text,
  Button,
  Actionsheet,
  Input,
  Pressable,
  Fab,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CollectionList from '../components/collectionListItem';
import {FlatList} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CollectionItemDetail from './collectionItemDetail';
import CollectionDetail from './collectionDetail';
import {PlusHover} from '../components/plusIconHover';
import firestore from '@react-native-firebase/firestore';

const Collection: FC = () => {
  const getUser = async () => {
    const userDocument = firestore()
      .collection('collection')
      .doc('5634161670881280')
      .get();
    console.log(userDocument);
  };
  const [toggle, SetToggle] = useState<boolean>(false);
  const ToggleSearch = () => {
    SetToggle(!toggle);
  };
  const DATA = [
    {
      id: '1',
      photo: {
        uri: 'https://images.unsplash.com/photo-1553532434-5ab5b6b84993?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29sb3IlMjBwYXR0ZXJufGVufDB8fDB8fA%3D%3D&w=1000&q=80',
      },
      city: 'Addison',
    },
    {
      id: '2',
      photo: {
        uri: 'https://media.istockphoto.com/vectors/abstract-geometric-pattern-artwork-retro-colors-and-white-background-vector-id1291627052?b=1&k=20&m=1291627052&s=612x612&w=0&h=pUVHHuQ2MSN1P-Mu96PXnpjHsVhZ0H7srafxhWWROC4=',
      },
      city: 'Addis Ababa',
    },
    {
      id: '3',
      photo: {
        uri: 'https://c0.wallpaperflare.com/preview/194/171/797/color-abstract-background-crop.jpg',
      },
      city: 'Rio',
    },
  ];

  return (
    <Box flex={1}>
      <Box>
        <HStack
          paddingY="5"
          width="100%"
          alignItems="center"
          justifyContent="space-between"
          paddingX="4"
          style={{
            shadowColor: 'black',
            shadowOpacity: 1,
            elevation: 5,
          }}>
          <Pressable onPress={ToggleSearch}>
            <MaterialIcons
              name={toggle ? 'keyboard-backspace' : 'search'}
              color="black"
              size={30}
            />
          </Pressable>
          <Text fontSize="md" fontFamily="monospace" fontWeight="black">
            Collections
          </Text>

          <AntIcon name="sharealt" size={20} color="black" />
        </HStack>
        {toggle ? (
          <Input
            w={{
              base: '90%',
              md: '25%',
            }}
            paddingX={4}
            alignSelf="center"
            borderRadius="full"
            InputLeftElement={
              <MaterialIcons
                name="search"
                size={20}
                style={{marginLeft: 10}}
                color="black"
              />
            }
            InputRightElement={
              <Ionicons
                name="md-map-outline"
                size={20}
                style={{marginRight: 10}}
                color="black"
              />
            }
            fontSize="md"
            placeholder="Search collection name"
          />
        ) : (
          <></>
        )}
      </Box>
      <Box width="100%" height="100%">
        <FlatList
          horizontal
          data={DATA}
          keyExtractor={item => item.id}
          ListFooterComponent={<Box style={{width: 60}}></Box>}
          renderItem={({item}) => <CollectionList data={item} />}
        />
        <PlusHover />
      </Box>
    </Box>
  );
};
export default Collection;
