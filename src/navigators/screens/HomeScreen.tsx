import { useNavigation } from '@react-navigation/native';
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { Counter } from '../../components/Counter';
import { useGetPostsQuery } from '../../services/getBooks';
import { Card, Searchbar } from 'react-native-paper';

export const HomeScreen = () => {
  const navigation = useNavigation();
  const { data, error } = useGetPostsQuery();
  const [searchQuery, setSearchQuery] = useState('');

  const searchResults = data?.items.filter(
    (item: any) =>
      searchQuery === '' ||
      item.volumeInfo.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <ScrollView>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details' as never)}
      />
      <Searchbar
        placeholder="Search By Title"
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
      <Text>{searchQuery}</Text>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          onError={e => {
            console.log('Image load error', e);
          }}
          source={{
            uri: 'http://books.google.com/books/content?id=it0RBAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          }}
        />
      </View>

      {searchResults?.map((item: any) => {
        {
          console.log(
            'item.volumeInfo.imageLinks?.smallThumbnail',
            item.volumeInfo.imageLinks?.smallThumbnail,
          );
        }
        return (
          <Card key={item.id} style={{ margin: 10 }}>
            <Card.Title
              title={item.volumeInfo.title}
              // left={() => (
              //   <Image source={{ uri: item.volumeInfo.imageLinks.thumbnail }} />
              // )}
            />
            <Card.Cover
              source={{
                uri: 'http://books.google.com/books/content?id=it0RBAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
              }}
            />
            <Card.Content>
              <Text>Authors: {item.volumeInfo.authors?.join(', ')}</Text>
              <Text>Published Date: {item.volumeInfo.publishedDate}</Text>
            </Card.Content>
          </Card>
        );
      })}
      {/* <Counter /> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 100,
    height: 100,
  },
});
