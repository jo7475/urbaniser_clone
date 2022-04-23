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
import {useIsPressed} from 'native-base/lib/typescript/components/primitives/Pressable/Pressable';

const Collection: FC = () => {
  const [toggle, SetToggle] = useState<boolean>(false);
  const ToggleSearch = () => {
    SetToggle(!toggle);
  };
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
      <Box>
        <HStack
          height="20"
          alignItems="center"
          justifyContent="space-between"
          paddingX="4">
          <Pressable onPress={ToggleSearch}>
            <MaterialIcons
              name={toggle ? 'keyboard-backspace' : 'search'}
              color="black"
              size={30}
            />
          </Pressable>
          <Text fontSize="md" fontFamily="Roboto" fontWeight="black">
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
              <MaterialIcons name="search" size={20} color="black" />
            }
            InputRightElement={
              <Ionicons name="md-map-outline" size={20} color="black" />
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
          renderItem={({item}) => <CollectionList />}
        />
        <Fab
          size="xs"
          position="absolute"
          bottom="81"
          style={{backgroundColor: 'orange'}}
          icon={<AntIcon name="plus" size={30} color="white" />}
        />
      </Box>
    </Box>
  );
};
export default Collection;
