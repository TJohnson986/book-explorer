import { Alert, Image, Linking, View } from 'react-native';
import { Button, Card, Chip, Text } from 'react-native-paper';
import { useBookDetailsStyles } from './BookDetail.style';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../state/favoriteBooksSlice';
import ExpandableText from '../ExpandableText';
import { FavoriteIcon } from '../FavoriteIcon';
import { BookResultProps } from '../../types/BookResult';
import { RootState } from '../../state/store';

export const BookDetail = (item: BookResultProps) => {
  const styles = useBookDetailsStyles();
  const dispatch = useDispatch();
  const isFavorite = useSelector(
    (state: RootState) => state.favoriteBooks,
  ).favoriteBooks.includes(item.id);

  const handleOpenLink = async (url: string) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert('Error', 'Uh Oh! Something went wrong.');
      }
    } catch (error) {
      Alert.alert('Error', 'Uh Oh! Something went wrong.');
    }
  };

  return (
    <Card style={styles.container}>
      <Card.Title title="" right={() => <FavoriteIcon {...item} />} />
      <Card.Content>
        <View style={styles.contentContainer}>
          <Image
            style={styles.thumbnail}
            source={{ uri: item.volumeInfo.imageLinks.thumbnail }}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'stretch',
              justifyContent: 'space-evenly',
            }}
          >
            <Chip style={styles.chip}>
              {item.saleInfo.retailPrice
                ? `$${item.saleInfo.retailPrice?.amount} USD`
                : 'No Price Available'}
            </Chip>
            <Chip style={styles.chip}>
              {item.saleInfo.isEbook ? 'Ebook Available!' : 'Hard copy Only'}
            </Chip>
          </View>
          <View style={styles.bodyTextContainer}>
            <Text style={styles.text} variant="bodyLarge">
              {item.volumeInfo.authors?.length === 1 ? 'Author: ' : 'Authors: '}
              {item.volumeInfo.authors?.join(', ')}
            </Text>
            <Text style={styles.text} variant="bodyLarge">
              Category:
            </Text>
            <Text style={styles.text} variant="bodyMedium">
              {item.volumeInfo.categories
                ? item.volumeInfo.categories.join(', ')
                : 'No Categories Available'}
            </Text>
            <Text style={styles.text} variant="bodyLarge">
              Description:
            </Text>
            <ExpandableText
              text={item.volumeInfo.description}
              initialNumberOfLines={3}
            />
          </View>
        </View>
      </Card.Content>
      <View style={styles.cardActions}>
        <Card.Actions>
          <Button
            mode="outlined"
            onPress={() => {
              handleOpenLink(item.volumeInfo.previewLink);
            }}
          >
            Preview
          </Button>
        </Card.Actions>
        <Card.Actions>
          {isFavorite ? (
            <Button
              mode="outlined"
              onPress={() => dispatch(decrement(item.id))}
            >
              Remove from Favorites
            </Button>
          ) : (
            <Button
              mode="contained"
              onPress={() => dispatch(increment(item.id))}
            >
              Add to Favorites
            </Button>
          )}
        </Card.Actions>
      </View>
    </Card>
  );
};
