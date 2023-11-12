import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp, useFocusEffect } from '@react-navigation/native';
import { RootStackParamList, UserData } from '../types';

type HomeScreenProps = {
  route: RouteProp<RootStackParamList, 'Home'>;
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
  userData: UserData;
};

type Book = {
  title: string;
  author: string;
  genre: string;
  numberOfPages: number;
};
type UserData = {
  totalPagesRead: number;
  numberOfBooks: number;
  lastReadBook?: Book; // Optional last read book details
};

const HomeScreen: React.FC<HomeScreenProps> = ({ route, navigation, userData }) => {
  
  const { lastReadBook, totalPagesRead, numberOfBooks } = userData;
  const averagePages = numberOfBooks > 0 ? totalPagesRead / numberOfBooks : 0;

  const title = route.params?.title;
  const author = route.params?.author;
  const selectedGenre = route.params?.selectedGenre;
  const numberOfPages = route.params?.numberOfPages;
  useFocusEffect(() => {
    // Code to run when the screen is focused
    console.log('HomeScreen focused');
  });
  return (
    <View style={styles.root}>
      <View style={styles.rectangle1}>
        <Text style={styles.pagePalHeader}>Page Pal</Text>
        <View style={styles.picture}>
        <Image source={require('./img/logo.png')} />
        </View>

      
      </View>

      <Text style={styles.welcomeToPagePal}>Welcome to Page Pal</Text>
      <Text style={styles.theLastBookYouHaveRead}>The Last Book You Have Read</Text>
      <Text style={styles.title}>Title: {title}</Text>
      <Text style={styles.author}>Author: {author}</Text>
      <Text style={styles.genre}>Genre: {selectedGenre}</Text>
      <Text style={styles.numberOfPages}>Number of pages: {numberOfPages}</Text>
      <Text style ={styles.totalPagesRead}>Total Pages Read: {totalPagesRead}</Text>
      <Text style={styles.averagePages}>Average Pages Per Book: {averagePages}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Entry")}
        >
          <Text style={styles.buttonText}>Entry</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Genre")}
        >
          <Text style={styles.buttonText}>Genre</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("History")}
        >
          <Text style={styles.buttonText}>History</Text>
        </TouchableOpacity>
      </View>

      {/* Display total pages read and average pages per book */}
      <Text>Total Pages Read: {totalPagesRead}</Text>
      <Text>Average Pages Per Book: {averagePages}</Text>
    </View>
  );
}




  const styles = StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: '#FFF',
    },
    rectangle1: {
      height: 85,
      backgroundColor: '#A77EB6',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    },
    pagePalHeader: {
      color: '#FFF',
      fontFamily: 'Inter',
      fontSize: 24,
      lineHeight: 28,
      marginTop: 27,
      position: 'absolute',
      top: 0,
      alignSelf: 'center',
    },
    welcomeToPagePal: {
      color: '#000',
      fontFamily: 'Inter',
      fontSize: 25,
      textAlign: 'center',
      marginTop: 30,
      marginBottom: 29,
      lineHeight: 30,
    },
    theLastBookYouHaveRead: {
      width: 224,
      height: 55,
      flexShrink: 0,
      color: '#829A8A',
      marginLeft: 95,
      marginBottom:7,
      textAlign: 'center',
      fontFamily: 'Inter',
      fontSize: 14,
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 15,
    },
    title: {
      color: '#000',
      fontFamily: 'Inter',
      fontSize: 18,
      lineHeight: 20,
      marginTop: 20,         // Top margin between elements
      marginLeft: 11,        // Left margin from the edge of the screen
      marginBottom: 2,     // Bottom margin between elements
      padding: 10,          // Padding inside the element
    },
    author: {
      color: '#000',
      fontFamily: 'Inter',
      fontSize: 18,
      lineHeight: 20,
      marginTop: 20,         // Top margin between elements
      marginLeft: 11,        // Left margin from the edge of the screen
      marginBottom: 2,     // Bottom margin between elements
      padding: 10,
    },
    genre: {
      color: '#000',
      fontFamily: 'Inter',
      fontSize: 18,
      lineHeight: 20,
      marginTop: 20,         // Top margin between elements
      marginLeft: 11,        // Left margin from the edge of the screen
      marginBottom: 2,     // Bottom margin between elements
      padding: 10,
    },
    numberOfPages: {
      color: '#000',
      fontFamily: 'Inter',
      fontSize: 18,
      lineHeight: 20,
      marginTop: 20,         // Top margin between elements
      marginLeft: 11,        // Left margin from the edge of the screen
      marginBottom: 2,     // Bottom margin between elements
      padding: 10,
    },
    totalPagesRead:{
      color: '#000',
      fontFamily: 'Inter',
      fontSize: 18,
      lineHeight: 20,
      marginTop: 20,         // Top margin between elements
      marginLeft: 11,        // Left margin from the edge of the screen
      marginBottom: 2,     // Bottom margin between elements
      padding: 10,
    },
    averagePages:{
      color: '#000',
      fontFamily: 'Inter',
      fontSize: 18,
      lineHeight: 20,
      marginTop: 20,         // Top margin between elements
      marginLeft: 11,        // Left margin from the edge of the screen
      marginBottom: 2,     // Bottom margin between elements
      padding: 10,
    },

    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 76,
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
    EntrybuttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 110,
    },
    Entrybutton: {
      backgroundColor: '#A77EB6', // Change this to the desired color
      borderRadius: 20,
      paddingVertical: 10,
      paddingHorizontal: 20,
      flex: 1,
      marginRight: 10,
      marginBottom:100,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 6,
    },
    label: {
      flex: 1,
      color: '#000',
      fontFamily: 'Inter-Bold',
      fontSize: 18,
      lineHeight: 24,
    },
    input: {
      flex: 2,
      backgroundColor: '#F4F4F4',
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderRadius: 5,
      fontFamily: 'Inter',
      fontSize: 18,
      lineHeight: 24,
      borderWidth: 1,
      borderColor: '#D1D1D1',
    },
    horisontalLayout: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginTop: 30
      },
    picture:{
      flex:1,
      marginRight: 200,
      marginTop:1,
      width:100,
      height:100,
      },
      
  });
  
  
  
   export default HomeScreen
  
  //-----------------------------------------------------------------------------
  //-----------------------------------------------------------------------------