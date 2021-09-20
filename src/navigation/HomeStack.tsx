import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { BooksScreen } from '../screens';
import { CharactersScreen } from '../screens';

const Stack = createNativeStackNavigator();

const HomeStack = () => (
  <Stack.Navigator initialRouteName="Books" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Characters" component={CharactersScreen} />
    <Stack.Screen name="Books" component={BooksScreen} />
  </Stack.Navigator>
);

export default HomeStack;
