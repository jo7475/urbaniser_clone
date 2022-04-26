import {Box, HStack, Pressable, VStack, Text} from 'native-base';
import React, {FC} from 'react';
import {Image} from 'native-base';
import {ImageBackground} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const Whatson: FC = ({navigation}) => {
  return (
    <Box width="100%" flex={1} backgroundColor="white">
      <HStack
        height="20"
        alignItems="center"
        justifyContent="space-between"
        paddingX="4"
        style={{elevation: 1, shadowColor: 'black'}}>
        <Pressable
          onPress={() => {
            navigation.navigate('Collection');
          }}>
          <MaterialIcons name="keyboard-backspace" size={30} color="black" />
        </Pressable>
        <Text fontSize="md" fontFamily="monospace" fontWeight="black">
          Whats On
        </Text>
        <AntIcon name="sharealt" size={20} color="black" />
      </HStack>

      <Image
        style={{width: '100%', aspectRatio: 1.5 / 1, marginBottom: 20}}
        source={{
          uri: 'https://img.freepik.com/free-vector/construction-concept-illustration_114360-1718.jpg?size=626&ext=jpg',
        }}
        alt="comming Soon"
      />
      <Text alignSelf="center" fontWeight="bold" fontSize={20}>
        Comming Soon
      </Text>
    </Box>
  );
};
