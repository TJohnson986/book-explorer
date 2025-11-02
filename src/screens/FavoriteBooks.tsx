import { BookDetail } from '../components/BookDetail/BookDetail';
import { ScrollView, Text, View } from 'react-native';
import { BookResultProps } from '../types/BookResult';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { useGetBooksQuery } from '../services/getBooks';
import { styles } from './FavoriteIcon.style';

export const FavoriteBooksScreen = () => {
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
        <ScrollView>
          {data?.length && data?.map(item => <BookDetail {...item} />)}
        </ScrollView>
      ) : (
        <View style={styles.noBooksContainer}>
          <Text style={styles.noBooksText}>No favorite books added yet.</Text>
        </View>
      )}
    </>
  );
};
