/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NativeBaseProvider, Box, Avatar} from 'native-base';
import {StyleSheet, useColorScheme} from 'react-native';
import Profile from './src/pages/profile';
import Collection from './src/pages/collection';
import Icon from 'react-native-vector-icons/FontAwesome';
import Iconicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import CollectionRoute from './src/Routes/collectionRoute';
import {Whatson} from './src/pages/whatson';
import {Recomendation} from './src/pages/recomendation';

const Tab = createBottomTabNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: 'orange',
            tabBarLabelStyle: {fontWeight: 'bold'},
          }}>
          <Tab.Screen
            name="COLLECTIONS"
            options={{
              tabBarIcon: tabInfo => (
                <Foundation
                  name="page-multiple"
                  size={25}
                  color={tabInfo.focused ? 'orange' : 'gray'}
                />
              ),
            }}
            component={CollectionRoute}
          />
          <Tab.Screen
            name="WHATS ON"
            options={{
              tabBarIcon: tabInfo => (
                <MCIcon
                  name="calendar-month-outline"
                  color={tabInfo.focused ? 'orange' : 'gray'}
                  size={25}
                />
              ),
            }}
            component={Whatson}
          />
          <Tab.Screen
            name="RECOMENDED"
            options={{
              tabBarIcon: tabInfo => (
                <Iconicons
                  name="chatbox-ellipses-outline"
                  color={tabInfo.focused ? 'orange' : 'gray'}
                  size={25}
                />
              ),
            }}
            component={Recomendation}
          />
          <Tab.Screen
            options={{
              tabBarIcon: () => (
                <Avatar
                  source={{
                    uri: 'data:image/jpeg;base64,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',
                  }}
                  size="7"
                />
              ),
            }}
            name="ME"
            component={Profile}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
