import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FlatList, Pressable, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useGetBooksQuery } from '../../services/getBooks';
import {
  ActivityIndicator,
  Card,
  Modal,
  PaperProvider,
  Portal,
  Searchbar,
} from 'react-native-paper';
import { BookResult } from '../../components/BookResult/BookResult';
import { BookResultProps } from '../../types/BookResult';
import { RootStackParamList } from '../../types/NavigationTypes';

export const HomeScreen = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);
  const containerStyle = { backgroundColor: 'white', margin: 20 };

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const { data, error, isLoading } = useGetBooksQuery();

  useEffect(() => {
    if (error) {
      showModal();
    }
  }, [error]);

  const searchResults = data?.items.filter(
    (item: BookResultProps) =>
      searchQuery === '' ||
      item.volumeInfo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.volumeInfo.authors
        ?.join(' ')
        .toLowerCase()
        .includes(searchQuery.toLowerCase()),
  );

  const renderResultCard = (item: BookResultProps) => (
    <Pressable
      onPress={() => navigation.navigate('Details', { item })}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? 'lightgray' : 'white',
        },
      ]}
    >
      <Card key={item.id} style={{ margin: 10 }}>
        <BookResult {...item} />
      </Card>
    </Pressable>
  );

  return (
    <>
      <PaperProvider>
        <Portal>
          <Searchbar
            placeholder="Search By Title"
            onChangeText={setSearchQuery}
            value={searchQuery}
          />
          {isLoading && <ActivityIndicator animating={true} size="large" />}
          <FlatList
            data={searchResults}
            renderItem={({ item }) => renderResultCard(item)}
            keyExtractor={item => item.id}
          />
          <Modal
            visible={modalVisible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}
          >
            <Text style={{ margin: 20 }}>Oh No! Something went wrong.</Text>
          </Modal>
        </Portal>
      </PaperProvider>
    </>
  );
};
