import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import EntryScreen from './screens/EntryScreen';
import GenreScreen from './screens/GenreScreen';
import HistoryScreen from './screens/HistoryScreen';
import { UserData } from './screens/types';
import { BookProvider } from './screens/BookContext';

const Stack = createNativeStackNavigator();

export default function App() {
  const [userData, setUserData] = useState<UserData>({
    lastReadBook: null,
    totalPagesRead: 0,
    numberOfBooks: 0,
  });

  return (
    <BookProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            options={{ headerShown: false }}
          >
            {props => <HomeScreen {...props} userData={userData} />}
          </Stack.Screen>
          <Stack.Screen name="Entry">
            {props => <EntryScreen {...props} userData={userData} setUserData={setUserData} />}
          </Stack.Screen>
          <Stack.Screen name="Genre" component={GenreScreen} />
          <Stack.Screen name="History" component={HistoryScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </BookProvider>
  );
}
