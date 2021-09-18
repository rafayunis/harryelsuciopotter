import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ExperimentalScreen, BooksScreen } from '../screens';

const Stack = createNativeStackNavigator();

const HomeStack = () => (
  <Stack.Navigator initialRouteName="Books" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Experimental" component={ExperimentalScreen} />
    <Stack.Screen name="Books" component={BooksScreen} />
  </Stack.Navigator>
);

export default HomeStack;
