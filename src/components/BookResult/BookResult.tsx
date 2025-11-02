import { Image, View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { styles } from './BookResult.style';
import { BookResultProps } from '../../types/BookResult';
import { FavoriteIcon } from '../FavoriteIcon';

const BookResultTitle = (item: BookResultProps) => {
  const { title } = item.volumeInfo;
  return (
    <Card.Title
      title={title}
      titleVariant="titleMedium"
      subtitle={item.volumeInfo.subtitle}
      right={() => <FavoriteIcon {...item} />}
    />
  );
};

export const BookResult = (item: BookResultProps) => {
  return (
    <>
      <BookResultTitle {...item} />
      <Card.Content>
        <View style={styles.container}>
          <Image
            style={styles.thumbnail}
            source={{ uri: item.volumeInfo.imageLinks.thumbnail }}
          />
          <View style={styles.bodyTextContainer}>
            <Text variant="bodyLarge">
              {item.volumeInfo.authors?.length === 1 ? 'Author: ' : 'Authors: '}
              {item.volumeInfo.authors
                ? item.volumeInfo.authors?.join(', ')
                : 'No Authors Available'}
            </Text>
            <Text variant="bodyMedium">
              Category:{' '}
              {item.volumeInfo.categories
                ? item.volumeInfo.categories.join(', ')
                : 'No Categories Available'}
            </Text>
          </View>
        </View>
      </Card.Content>
    </>
  );
};
