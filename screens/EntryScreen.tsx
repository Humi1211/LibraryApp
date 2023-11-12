import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Modal,
  Button,
  Image,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, UserData, Book } from '../types';
import { useBookContext } from './BookContext';

type EntryScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Entry'>;
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
};

const availableGenres = [
  'Fiction',
  'Mystery',
  'Fantasy',
  'Science Fiction',
  'Romance',
  'Horror',
  'Suspense',
];

const EntryScreen: React.FC<EntryScreenProps> = ({ navigation, userData, setUserData }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [numberOfPages, setNumberOfPages] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const { addBook, lastThreeBooks } = useBookContext();

  
  

  const submitBook = () => {
    const newBook: Book = {
      title,
      author,
      selectedGenre,
       genre: selectedGenre,
      numberOfPages,
    };
    
    
     addBook(newBook);

     

    setUserData((prevUserData: { totalPagesRead: number; numberOfBooks: number; }) => ({
      lastReadBook: newBook,
      totalPagesRead: prevUserData.totalPagesRead + Number(newBook.numberOfPages),
      numberOfBooks: prevUserData.numberOfBooks + 1,
    }));

    setTitle('');
    setAuthor('');
    setSelectedGenre('');
    setNumberOfPages('');
    navigation.navigate('Home', newBook);
  };

  const handleGenreSelect = (genre: string) => {
    setSelectedGenre(genre);
    setModalVisible(false);
  };

  return (
    <View style={styles.root}>
       <View style={styles.pen}>
        <Image source={require('./img/pen.png')} />
        </View>
      <Text style={styles.welcomeToPagePal}>Make an Entry</Text>
      <Text style={styles.theLastBookYouHaveRead}>
        Enter the details to log your book
      </Text>

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
        <TouchableOpacity
          style={styles.genreButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.button}>
            {selectedGenre || 'Select Genre'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Number of Pages input field */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Number of Pages:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter number of pages"
          value={numberOfPages}
          onChangeText={(text) => setNumberOfPages(text)}
          keyboardType="numeric"
        />
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.modalContainer}>
  {availableGenres.map((genre) => (
    <TouchableOpacity
      key={genre}
      style={styles.genreOption}
      onPress={() => handleGenreSelect(genre)}
    >
      <Text style={styles.genreOptionText}>{genre}</Text>
    </TouchableOpacity>
  ))}
  <TouchableOpacity
    style={styles.genreOptionCancel}
    onPress={() => setModalVisible(false)}
  >
    <Text style={styles.genreOptionText}>Cancel</Text>
  </TouchableOpacity>
</View>
      </Modal>

      <View style={styles.submitbuttonContainer}>
        <TouchableOpacity style={styles.Entrybutton} onPress={submitBook}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
      
    </View>
    
  );
};


const styles = StyleSheet.create({
  genreOption: {
    marginVertical: 5,
    padding: 10,
    backgroundColor: "#F4F4F4",
    borderRadius: 5,
    width: "80%", // Adjust the width as needed
    alignItems: "center",
  },

  genreOptionCancel: {
    marginVertical: 5,
    padding: 10,
    backgroundColor: "#829A8A",
    borderRadius: 5,
    width: "80%",
    alignItems: "center",
    marginTop: 25, // Extra margin for Cancel button
  },

  genreOptionText: {
    fontSize: 18,
    fontFamily: "Inter",
    lineHeight: 24,
  },
  buttonText: {
    color: "#FFF",
    marginTop: 10,
    marginRight: 10,
    marginBottom: 10,
    textAlign:"center",
    
  },
  root: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 20,
  },
  welcomeToPagePal: {
    color: "#000",
    fontFamily: "Inter",
    fontSize: 25,
    textAlign: "center",
    marginTop: 30,
    marginBottom: 29,
    lineHeight: 30,
  },
  theLastBookYouHaveRead: {
    color: "#000",
    marginLeft: 7,
    marginBottom: 60,
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 15,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  label: {
    flex: 1,
    color: "#000",
    fontFamily: "Inter-Bold",
    fontSize: 18,
    lineHeight: 24,
  },
  input: {
    flex: 2,
    backgroundColor: "#F4F4F4",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 5,
    fontFamily: "Inter",
    fontSize: 18,
    lineHeight: 24,
    borderWidth: 1,
    borderColor: "#D1D1D1",
  },
  EntrybuttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 110,
    maxWidth:120,
   marginLeft:120,
   
  },
  Entrybutton: {
    backgroundColor: "#829A8A",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flex: 1,
    marginRight: 10,
    marginBottom: 100,
  },
  genreButton: {
    flex: 2,
    backgroundColor: "#F4F4F4",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 5,
    fontFamily: "Inter",
    fontSize: 18,
    lineHeight: 24,
    borderWidth: 1,
    borderColor: "#D1D1D1",
  },
  modalContainer: {
    marginBottom:4,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingHorizontal: 10, // Reduce horizontal padding
    paddingVertical: 0, // Reduce vertical padding
    borderRadius: 5, // Reduce the border radius to make it less round
  },
  button:{
    fontSize: 17,
  },
  pen:{
marginLeft:140,
marginBottom:-30,
  },
  submitbuttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    maxWidth:110,
   marginLeft:130,
   
  },
 
});

export default EntryScreen;