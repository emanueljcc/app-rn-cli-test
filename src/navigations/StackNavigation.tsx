/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// screens
import HomeScreen from '../screens/HomeScreen';
import PageDetailScreen from '../screens/PageDetailScreen';
import {PurpleBG} from '../components';
import {MockResponse} from '../interfaces';

export type StackNavigationParams = {
  HomeScreen: {
    handleVibration: () => void;
  };
  PageDetailScreen: {
    item: MockResponse;
  };
};

const Stack = createStackNavigator<StackNavigationParams>();

const StackNavigation = (): JSX.Element => {
  const customHeader = () => ({
    headerStyle: {
      height: 0,
    },
    headerLeft: () => null,
    headerBackground: () => <PurpleBG title="" />,
    headerTitleAlign: 'left',
  });

  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        cardStyle: {
          backgroundColor: '#F8F8F8',
        },
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen
        name="PageDetailScreen"
        component={PageDetailScreen}
        options={{...(customHeader() as object)}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
