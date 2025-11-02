import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../state/favoriteBooksSlice';
import { Avatar } from 'react-native-paper';
import { Pressable } from 'react-native';
import { BookResultProps } from '../types/BookResult';
import { RootState } from '../state/store';

export const FavoriteIcon = (item: BookResultProps) => {
  const dispatch = useDispatch();

  const isFavorite = useSelector(
    (state: RootState) => state.favoriteBooks,
  ).favoriteBooks.includes(item.id);

  return (
    <Pressable
      onPress={() => {
        isFavorite
          ? dispatch(decrement(item.id))
          : dispatch(increment(item.id));
      }}
    >
      <Avatar.Icon
        size={30}
        icon={isFavorite ? 'heart' : 'heart-outline'}
        style={{
          justifyContent: 'center',
          margin: 10,
          marginBottom: 20,
        }}
      />
    </Pressable>
  );
};
