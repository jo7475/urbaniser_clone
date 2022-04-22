import {Box, Heading, Text, HStack} from 'native-base';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Profile = () => {
  return (
    <Box>
      <HStack
        height="20"
        alignItems="center"
        justifyContent="space-between"
        paddingX="4"
        shadow={3}>
        <MaterialIcons name="keyboard-backspace" size={30} color="black" />
        <Text fontSize="lg" fontWeight="black">
          Profile
        </Text>
        <AntIcon name="sharealt" size={20} color="black" />
      </HStack>
      <Box></Box>
    </Box>
  );
};
export default Profile;
