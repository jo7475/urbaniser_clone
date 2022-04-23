import {NavigationContainer} from '@react-navigation/native';
import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CollectionDetail from '../pages/collectionDetail';
import CollectionItemDetail from '../pages/collectionItemDetail';
import Collection from '../pages/collection';
import {createStackNavigator} from '@react-navigation/stack';

export type StackProp = {
  Collection: undefined;
  CollectionItemDetail: undefined;
};
const Stack = createStackNavigator();
const CollectionRoute: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Collection" component={Collection} />
      <Stack.Screen
        name="CollectionItemDetail"
        component={CollectionItemDetail}
      />
    </Stack.Navigator>
  );
};
export default CollectionRoute;
