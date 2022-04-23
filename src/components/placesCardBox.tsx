import {
  Actionsheet,
  Box,
  Image,
  Pressable,
  Text,
  useDisclose,
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

export const PlacesCardBox: FC = () => {
  const navigation =
    useNavigation<StackNavigationProp<StackProp, 'CollectionItemDetail'>>();
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <Pressable
      width={windowWidth * 0.45}
      style={{aspectRatio: 1 / 1}}
      marginTop={5}
      marginLeft={3}
      onPress={() => {
        navigation.navigate('CollectionItemDetail');
      }}>
      <ImageBackground
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmiLo-UH7EZCj0O_dYCoHj6pDhv3YAM4Flfw&usqp=CAU',
        }}
        resizeMode="cover"
        style={{flex: 1, width: '100%', height: '100%'}}>
        <Text
          color="white"
          fontSize={15}
          alignSelf="flex-end"
          marginTop="auto"
          style={{textAlign: 'right'}}
          marginBottom={2}
          marginRight={1}>
          Jamali Kopy Kat Printing Inc
        </Text>
        <Pressable alignSelf="flex-end" position="absolute" p={3}>
          <MaterialIcons name="more-horiz" size={30} color="white" />
        </Pressable>
      </ImageBackground>
    </Pressable>
  );
};
