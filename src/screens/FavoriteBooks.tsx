import { BookDetail } from '../components/BookDetail/BookDetail';
import { FlatList, Text, View } from 'react-native';
import { BookResultProps } from '../types/BookResult';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { useGetBooksQuery } from '../services/getBooks';
import { useFavoriteBooksStyles } from './FavoriteBooks.style';

export const FavoriteBooksScreen = () => {
  const styles = useFavoriteBooksStyles();
  const favoriteBooksIds: String[] = useSelector(
    (state: RootState) => state.favoriteBooks.favoriteBooks,
  );
  const { data } = useGetBooksQuery(undefined, {
    selectFromResult: ({ data }) => ({
      data: data?.items.filter((item: BookResultProps) =>
        favoriteBooksIds.includes(item.id),
      ),
    }),
  });
  return (
    <>
      {data?.length ? (
        <FlatList
          data={data}
          renderItem={({ item }) => <BookDetail {...item} />}
          keyExtractor={item => item.id}
        />
      ) : (
        <View style={styles.noBooksContainer}>
          <Text style={styles.noBooksText}>No favorite books added yet.</Text>
        </View>
      )}
    </>
  );
};
