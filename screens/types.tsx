export type RootStackParamList = {
  Home: undefined;
  Entry: undefined;
  History: undefined;
  Genre: undefined;
  Books: undefined;
};

export interface Book {
  title: string;
  author: string;
  selectedGenre: string;
  numberOfPages: string;
}

export interface UserData {
  lastReadBook: Book | null;
  totalPagesRead: number;
  numberOfBooks: number;
}