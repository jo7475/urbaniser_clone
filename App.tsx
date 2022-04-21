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
import {NativeBaseProvider, Box, Image} from 'native-base';
import {StyleSheet, useColorScheme} from 'react-native';
import Profile from './src/pages/profile';
import Collection from './src/pages/collection';
import profile from './src/assets/jo.jpg';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{headerShown: false}}>
          <Tab.Screen name="COLLECTIONS" component={Collection} />
          <Tab.Screen name="WHATS ON" component={Profile} />
          <Tab.Screen name="RECOMENDED" component={Profile} />
          <Tab.Screen
            options={{
              tabBarIcon: () => (
                <Box borderRadius="full" overflow="hidden" width="8" height="8">
                  <Image source={profile} width="100%" height="100%" />
                </Box>
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
