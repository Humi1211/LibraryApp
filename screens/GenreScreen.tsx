import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { useNavigation } from '@react-navigation/native';

type GenreScreenProp = StackNavigationProp<RootStackParamList, 'Genre'>;

function GenreScreen() {
  const navigation = useNavigation<GenreScreenProp>();


  //only user intrface/desgin is done

  return (
    <View style={styles.root}>
       <View style={styles.person}>
        <Image source={require('./img/person.png')} />
        </View>
      <Text style={styles.welcomeToPagePal}>Genres Read By You</Text>
      <ScrollView style={styles.genreContainer}>
        {/* Display genre statistics */}
        {genres.map((genre, index) => (
          <View style={styles.genreItem} key={index}>
            <Text style={styles.genreText}>{genre.name}</Text>
            <Text style={styles.genreCount}>Total Books: {genre.totalBooks}</Text>
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
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('History')}
        >
          <Text style={styles.buttonText}>History</Text>
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
  pagePalHeader: {
    color: '#A77EB6',
    fontFamily: 'Inter',
    fontSize: 24,
    textAlign: 'center',
    marginTop: 20,
  },
  welcomeToPagePal: {
    color: '#000',
    fontFamily: 'Inter',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  genreContainer: {
    marginTop: 20,
  },
  genreItem: {
    backgroundColor: '#F4F4F4',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  genreText: {
    fontSize: 18,
    fontFamily: 'Inter',
    color: '#000',
  },
  genreCount: {
    fontSize: 14,
    fontFamily: 'Inter',
    color: '#777',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#A77EB6',
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
  person:{
marginLeft:130,
  }
});

const genres = [
  { name: 'Fiction', totalBooks: "" },
  { name: 'Mystery', totalBooks: "" },
  { name: 'Fantasy', totalBooks: "" },
  { name: 'Science Fiction', totalBooks: "" },
  { name: 'Romance', totalBooks: "" },
  { name: 'Horror', totalBooks: "" },
  { name: 'Suspense', totalBooks: "" },
  // Add more genres as needed
];

export default GenreScreen;
