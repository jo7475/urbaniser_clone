import {Box, HStack, VStack, Text} from 'native-base';
import React, {FC} from 'react';
import {Image} from 'native-base';
import {ImageBackground, Pressable} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const Recomendation: FC = ({navigation}) => {
  return (
    <Box width="100%" flex={1} backgroundColor="white">
      <HStack
        height="20"
        alignItems="center"
        justifyContent="space-between"
        paddingX="4"
        shadow={3}>
        <Pressable
          onPress={() => {
            navigation.navigate('Collection');
          }}>
          <MaterialIcons name="keyboard-backspace" size={30} color="black" />
        </Pressable>
        <Text fontSize="md" fontFamily="monospace" fontWeight="black">
          Recomendations
        </Text>
        <AntIcon name="sharealt" size={20} color="black" />
      </HStack>
      <ImageBackground
        style={{width: '100%', aspectRatio: 1 / 1}}
        source={{
          uri: 'https://cdn.dribbble.com/users/760295/screenshots/4433975/media/03494b209a1511a61868ced337b97931.png?compress=1&resize=800x600&vertical=top',
        }}
      />
    </Box>
  );
};
