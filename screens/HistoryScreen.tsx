import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useBookContext } from './BookContext';

type HistoryScreenProp = StackNavigationProp<RootStackParamList, 'History'>;

function HistoryScreen() {
  const { enteredBooks } = useBookContext();
  const navigation = useNavigation<HistoryScreenProp>();
  
  useFocusEffect(() => {
    // Code to run when the screen is focused
    console.log('HomeScreen focused');
  });


  

  return (
    <View style={styles.root}>
      <View style={styles.picHistory}>
        <Image source={require('./img/history.png')} />
      </View>
      <Text style={styles.welcomeToPagePal}>History Of Your Last 3 Books</Text>

      <ScrollView style={styles.historyContainer}>
        {enteredBooks.slice(0, 3).map((book, index) => (
          <View style={styles.bookItem} key={index}>
            <Text style={styles.bookTitle}>{book.title}</Text>
            <Text style={styles.bookAuthor}>Author: {book.author}</Text>
            <Text style={styles.bookGenre}>Genre: {book.genre}</Text>
            <Text style={styles.bookPages}>Pages: {book.numberOfPages}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Entry')}
        >
          <Text style={styles.buttonText}>Entry</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Genre')}
        >
          <Text style={styles.buttonText}>Genre</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20,
  },
  welcomeToPagePal: {
    color: '#000',
    fontFamily: 'Inter',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  historyContainer: {
    marginTop: 30,
  },
  bookItem: {
    backgroundColor: '#F4F4F4',
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
  },
  bookTitle: {
    fontSize: 18,
    fontFamily: 'Inter',
    color: '#687B6E',
  },
  bookAuthor: {
    fontSize: 14,
    fontFamily: 'Inter',
    color: '#777',
  },
  bookGenre: {
    fontSize: 14,
    fontFamily: 'Inter',
    color: '#777',
  },
  bookPages: {
    fontSize: 14,
    fontFamily: 'Inter',
    color: '#777',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 79,
  },
  button: {
    backgroundColor: '#829A8A',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flex: 1,
    marginRight: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    textAlign: 'center',
  },
  picHistory: {
    marginLeft: 149,
  },
});

export default HistoryScreen;
