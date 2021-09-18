import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ExperimentalScreen, BooksScreen } from '../screens';

const Stack = createNativeStackNavigator();

const AuthStack = () => (
  <Stack.Navigator initialRouteName="Books" screenOptions={{ headerShown: true }}>
    <Stack.Screen name="Books" component={BooksScreen} options={{ headerShown: true }} />
    <Stack.Screen name="Experimental" component={ExperimentalScreen} />

  </Stack.Navigator>
);

export default AuthStack;
