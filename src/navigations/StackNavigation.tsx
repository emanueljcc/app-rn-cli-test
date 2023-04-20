import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// screens
import HomeScreen from '../screens/HomeScreen';
import PageDetailScreen from '../screens/PageDetailScreen';

const Stack = createStackNavigator();

const StackNavigation = (): JSX.Element => {
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
      <Stack.Screen name="PageDetailScreen" component={PageDetailScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
