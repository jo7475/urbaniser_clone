import {
  Actionsheet,
  Box,
  HStack,
  Image,
  Pressable,
  Text,
  useDisclose,
  VStack,
} from 'native-base';
import React, {FC, useState} from 'react';
import {Dimensions, ImageBackground} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FeatherIcons from 'react-native-vector-icons/Feather';
import Iconicons from 'react-native-vector-icons/Ionicons';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackProp} from '../Routes/collectionRoute';

export const PlacesCardList: FC = () => {
  const navigation =
    useNavigation<StackNavigationProp<StackProp, 'CollectionItemDetail'>>();
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <Pressable
      width="98%"
      style={{
        overflow: 'hidden',
        aspectRatio: 2.8 / 1,
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 2,
      }}
      marginTop={5}
      alignSelf="center"
      onPress={() => {
        navigation.navigate('CollectionItemDetail');
      }}>
      <HStack height="100%">
        <ImageBackground
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmiLo-UH7EZCj0O_dYCoHj6pDhv3YAM4Flfw&usqp=CAU',
          }}
          resizeMode="cover"
          style={{flex: 1, width: '100%', height: '100%'}}></ImageBackground>
        <Box width="63%">
          <Text width="78%" padding={3}>
            nice experience need to go again
          </Text>
          <Text
            color="black"
            fontSize={15}
            fontFamily="monospace"
            alignSelf="flex-end"
            marginTop="auto"
            style={{textAlign: 'right'}}
            marginBottom={2}
            marginRight={1}>
            Jamali Kopy Kat Printing Inc
          </Text>
          <Pressable alignSelf="flex-end" position="absolute" p={3}>
            <MaterialIcons name="more-horiz" size={20} color="black" />
          </Pressable>
        </Box>
      </HStack>
    </Pressable>
  );
};
