import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthStack from './AuthStack';
import TabNavigator from './TabNavigator';
import { BookDetailsScreen, InitializeScreen, BooksScreen } from '../screens';

const Stack = createNativeStackNavigator();

const MainNavigator = () => (
  <Stack.Navigator initialRouteName="Initialize" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Intialize" component={InitializeScreen} />
    <Stack.Screen name="AuthStack" component={AuthStack} />
    <Stack.Screen name="TabNavigator" component={TabNavigator} />
    <Stack.Screen name="Books" component={BooksScreen} />
    <Stack.Screen name="BookDetails" component={BookDetailsScreen} />
  </Stack.Navigator>
);

export default MainNavigator;
