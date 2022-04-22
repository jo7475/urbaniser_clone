import React from 'react';
import {Box, HStack, Text, Button, Pressable} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CollectionList from '../components/collectionListItem';
import {FlatList} from 'react-native';

const Collection = () => {
  const DATA = [
    {
      id: '1',
      title: 'Addison',
    },
    {
      id: '2',
      city: 'Addis Ababa',
    },
    {
      id: '3',
      title: 'Rio',
    },
  ];
  return (
    <Box flex={1}>
      <HStack
        height="20"
        alignItems="center"
        justifyContent="space-between"
        paddingX="4"
        shadow={5}>
        <MaterialIcons name="search" size={30} color="black" />
        <Text fontSize="lg" fontWeight="black">
          Collections
        </Text>
        <AntIcon name="sharealt" size={20} color="black" />
      </HStack>
      <Box width="100%" height="100%">
        <FlatList
          horizontal
          data={DATA}
          keyExtractor={item => item.id}
          renderItem={({item}) => <CollectionList />}
        />
        <Pressable
          position="absolute"
          bg="orange.400"
          p={3.5}
          right={4}
          alignSelf="flex-end"
          bottom="100px"
          rounded="full">
          <AntIcon name="plus" size={30} color="white" />
        </Pressable>
      </Box>
    </Box>
  );
};
export default Collection;
