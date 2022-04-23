import {Fab, Pressable} from 'native-base';
import React, {FC} from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';

export const PlusHover: FC = () => {
  return (
    <Fab
      size="xs"
      position="absolute"
      bottom="81"
      style={{backgroundColor: 'orange'}}
      icon={<AntIcon name="plus" size={30} color="white" />}
    />
    // <Pressable
    //   position="absolute"
    //   borderRadius="full"
    //   style={{
    //     backgroundColor: 'orange',
    //     padding: 15,
    //     alignSelf: 'flex-end',
    //     bottom: 110,
    //     right: 20,
    //   }}>
    //   <AntIcon name="plus" size={30} color="white" />
    // </Pressable>
  );
};
