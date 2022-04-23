import {
  Actionsheet,
  Box,
  Image,
  Pressable,
  Text,
  useDisclose,
} from 'native-base';
import React, {FC} from 'react';
import {Dimensions, ImageBackground} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FeatherIcons from 'react-native-vector-icons/Feather';
import Iconicons from 'react-native-vector-icons/Ionicons';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackProp} from '../Routes/collectionRoute';

const CollectionList: FC = () => {
  const navigation =
    useNavigation<StackNavigationProp<StackProp, 'CollectionItemDetail'>>();
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const {isOpen, onOpen, onClose} = useDisclose();
  return (
    <Pressable
      bgColor="blue.100"
      width={windowWidth * 0.75}
      height={windowHeight * 0.73}
      marginTop={5}
      marginLeft={3}
      onPress={() => {
        navigation.navigate('CollectionItemDetail');
      }}>
      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1553532434-5ab5b6b84993?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29sb3IlMjBwYXR0ZXJufGVufDB8fDB8fA%3D%3D&w=1000&q=80',
        }}
        resizeMode="cover"
        style={{flex: 1, width: '100%', height: '100%'}}>
        <Text color="white" fontSize={20} marginTop={10} marginLeft={6}>
          Addis Ababa
        </Text>
        <Pressable
          alignSelf="flex-end"
          onPress={onOpen}
          position="absolute"
          bottom={0}
          p={3}>
          <MaterialIcons name="more-horiz" size={30} color="white" />
        </Pressable>
        <Actionsheet isOpen={isOpen} onClose={onClose}>
          <Box w="100%" h={60} px={4} bg="white" justifyContent="center">
            <Text
              fontSize="16"
              color="gray.500"
              _dark={{
                color: 'gray.300',
              }}>
              More Options
            </Text>
          </Box>
          <Actionsheet.Item
            startIcon={<MCIcons name="delete" color="red" size={25} />}>
            <Box flexDir="row">
              <Text fontSize={18}>Delete</Text>
            </Box>
          </Actionsheet.Item>
          <Actionsheet.Item
            startIcon={<MCIcons name="camera-iris" color="black" size={25} />}>
            <Box flexDir="row">
              <Text fontSize={18}>Change Style Board</Text>
            </Box>
          </Actionsheet.Item>
          <Actionsheet.Item
            startIcon={
              <MCIcons name="share-variant" color="black" size={25} />
            }>
            <Box flexDir="row">
              <Text fontSize={18}>Recommend</Text>
            </Box>
          </Actionsheet.Item>
          <Actionsheet.Item
            startIcon={<FeatherIcons name="info" color="black" size={25} />}>
            <Box flexDir="row">
              <Text fontSize={18}>Instructions</Text>
            </Box>
          </Actionsheet.Item>
          <Actionsheet.Item
            startIcon={<Iconicons name="git-merge" color="black" size={25} />}>
            <Box flexDir="row">
              <Text fontSize={18}>Merge with other collections</Text>
            </Box>
          </Actionsheet.Item>
        </Actionsheet>
      </ImageBackground>
    </Pressable>
  );
};
export default CollectionList;
