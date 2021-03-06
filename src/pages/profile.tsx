import {Box, Heading, Text, HStack, VStack, Avatar} from 'native-base';
import React, {FC, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ProfileList from '../components/profileList';
import {Pressable} from 'react-native';

interface menu {
  icon: string;
  id: string;
  name: string;
  screen: string;
}
const Profile: FC = ({navigation}) => {
  return (
    <Box marginBottom={20} flex={1}>
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
          Account
        </Text>
        <AntIcon name="sharealt" size={20} color="black" />
      </HStack>
      <VStack>
        <ProfileList />
      </VStack>
    </Box>
  );
};
export default Profile;
