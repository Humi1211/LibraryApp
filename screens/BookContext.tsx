// BookContext.tsx
import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';

type Book = {
  title: string;
  author: string;
  genre: string;
  numberOfPages: string;
};

type BookContextType = {
  enteredBooks: Book[]; // Include enteredBooks here
  lastThreeBooks: Book[];
  addBook: (book: Book) => void;
};

const BookContext = createContext<BookContextType | undefined>(undefined);

type BookProviderProps = {
  children: ReactNode;
};

export const BookProvider: React.FC<BookProviderProps> = ({ children }) => {
  const [enteredBooks, setEnteredBooks] = useState<Book[]>([]);
  const [lastThreeBooks, setLastThreeBooks] = useState<Book[]>([]);

  const addBook = (book: Book) => {
    setEnteredBooks(prevBooks => [book, ...prevBooks]);
  };

  useEffect(() => {
    // Update lastThreeBooks only when enteredBooks changes
    setLastThreeBooks(prevEnteredBooks => prevEnteredBooks.slice(0, 3));
  }, [enteredBooks]);

  return (
    <BookContext.Provider value={{ enteredBooks, lastThreeBooks, addBook }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBookContext = () => {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error('useBookContext must be used within a BookProvider');
  }
  return context;
};