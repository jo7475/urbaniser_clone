import {Box, Image, Pressable, Text} from 'native-base';
import React from 'react';
import {Dimensions, ImageBackground} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const CollectionList = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <Pressable
      bgColor="blue.100"
      width={windowWidth * 0.75}
      height={windowHeight * 0.7}
      marginTop={5}
      marginLeft={5}>
      <ImageBackground
        source={{
          uri: 'https://picsum.photos/200/300?Math.floor(Math.random() * 90)',
        }}
        resizeMode="cover"
        style={{flex: 1, width: '100%', height: '100%'}}>
        <Text color="white" fontSize={20} marginTop={10} marginLeft={6}>
          Addis Ababa
        </Text>
        <Pressable alignSelf="flex-end" position="absolute" bottom={0} p={3}>
          <MaterialIcons name="more-horiz" size={30} color="white" />
        </Pressable>
      </ImageBackground>
    </Pressable>
  );
};
export default CollectionList;
