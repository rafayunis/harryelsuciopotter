import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { BooksScreen } from '../screens';

const Stack = createNativeStackNavigator();

const AuthStack = () => (
  <Stack.Navigator initialRouteName="Books" screenOptions={{ headerShown: true }}>
    <Stack.Screen name="Books" component={BooksScreen} options={{ headerShown: true }} />
  </Stack.Navigator>
);

export default AuthStack;
