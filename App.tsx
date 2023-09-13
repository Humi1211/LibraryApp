import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// Create a functional component for HomeScreen
function HomeScreen({ navigation }) {
  return (
    <View style={styles.root}>
      <View style={styles.rectangle1}>
        <Text style={styles.pagePalHeader}>Page Pal</Text>
      </View>


      <Text style={styles.welcomeToPagePal}>Welcome to Page Pal</Text>
      <Text style={styles.theLastBookYouHaveRead}>The Last Book You Have Read</Text>
      <Text style={styles.title}>Title:</Text>
      <Text style={styles.author}>Author:</Text>
      <Text style={styles.genre}>Genre:</Text>
      <Text style={styles.numberOfPages}>Number of pages:</Text>


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
          onPress={() => navigation.navigate('History')}
        >
          <Text style={styles.buttonText}>History</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

//-----------------------------------------------------------------------------




// Create a functional component for EntryScreen
function EntryScreen({ navigation }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [numberOfPages, setNumberOfPages] = useState('');

  return (
    <View style={styles.root}>
      <View style={styles.rectangle1}>
        <Text style={styles.pagePalHeader}>Page Pal</Text>
      </View>
      <Text style={styles.welcomeToPagePal}>Welcome to Page Pal</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Title:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter title"
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Author:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter author"
          value={author}
          onChangeText={(text) => setAuthor(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Genre:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter genre"
          value={genre}
          onChangeText={(text) => setGenre(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Number of pages:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter number of pages"
          value={numberOfPages}
          onChangeText={(text) => setNumberOfPages(text)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Genre')}
        >
          <Text style={styles.buttonText}>Genre</Text>
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



//-----------------------------------------------------------------------------






// Create a functional component for GenreScreen
function GenreScreen({ navigation }) {
  return (
    <View>
      <Text>Genre Screen</Text>
      {/* Add content for the Genre Screen */}
    </View>
  );
}



//-----------------------------------------------------------------------------



// Create a functional component for HistoryScreen
function HistoryScreen({ navigation }) {
  return (
    <View>
      <Text>History Screen</Text>
      {/* Add content for the History Screen */}
    </View>
  );
}


//-----------------------------------------------------------------------------


const Stack = createNativeStackNavigator();



//-----------------------------------------------------------------------------




export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }} // This line hides the header
        />
        <Stack.Screen name="Entry" component={EntryScreen} />
        <Stack.Screen name="Genre" component={GenreScreen} />
        <Stack.Screen name="History" component={HistoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}







//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------





//Styles
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
    color: '#000',
    marginLeft: 95,
    marginBottom:60,
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
    marginTop: 20,
    marginLeft: 11,
    marginBottom: 10,
  },
  author: {
    color: '#000',
    fontFamily: 'Inter',
    fontSize: 18,
    lineHeight: 20,
    marginTop: 20,
    marginLeft: 11,
    marginBottom: 10,
  },
  genre: {
    color: '#000',
    fontFamily: 'Inter',
    fontSize: 18,
    lineHeight: 20,
    marginTop: 20,
    marginLeft: 11,
    marginBottom: 10,
  },
  numberOfPages: {
    color: '#000',
    fontFamily: 'Inter',
    fontSize: 18,
    lineHeight: 20,
    marginTop: 20,
    marginLeft: 11,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 120,
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
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
});


//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------