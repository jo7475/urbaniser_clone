import {Box, Pressable} from 'native-base';
import React, {FC} from 'react';
import MapView from 'react-native-maps';
import AntIcon from 'react-native-vector-icons/FontAwesome';

export const Map: FC = () => {
  return (
    <Box>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
        style={{width: '100%', height: '100%'}}
      />
      <Pressable
        position="absolute"
        borderRadius="full"
        style={{
          aspectRatio: 1 / 1,
          width: 60,
          backgroundColor: '#1e90ff',
          padding: 15,
          alignSelf: 'flex-end',
          alignItems: 'center',
          justifyContent: 'center',
          bottom: 110,
          left: 20,
          elevation: 1,
          shadowColor: 'black',
        }}>
        <AntIcon name="location-arrow" size={30} color="white" />
      </Pressable>
    </Box>
  );
};
