import { FlatList, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useGetBooksQuery } from '../services/getBooks';
import {
  ActivityIndicator,
  Modal,
  PaperProvider,
  Portal,
  Searchbar,
} from 'react-native-paper';
import { BookResultProps } from '../types/BookResult';
import { styles } from './HomeScreen.style';
import { BookResultCard } from '../components/BookResult/BookResultCard';

export const HomeScreen = () => {
  // component state
  const [modalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  // data fetching and filtering
  const { data, error, isLoading } = useGetBooksQuery();
  const searchResults = data?.items.filter(
    (item: BookResultProps) =>
      searchQuery === '' ||
      item.volumeInfo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.volumeInfo.authors
        ?.join(' ')
        .toLowerCase()
        .includes(searchQuery.toLowerCase()),
  );
  // modal handlers
  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);
  useEffect(() => {
    if (error) {
      showModal();
    }
  }, [error]);

  return (
    <>
      <PaperProvider>
        <Portal>
          <Searchbar
            placeholder="Search By Title or Author"
            onChangeText={setSearchQuery}
            style={styles.searchBar}
            value={searchQuery}
          />
          {isLoading && <ActivityIndicator animating={true} size="large" />}
          <FlatList
            data={searchResults}
            renderItem={({ item }) => <BookResultCard {...item} />}
            keyExtractor={item => item.id}
          />
          <Modal
            visible={modalVisible}
            onDismiss={hideModal}
            contentContainerStyle={styles.modalContainer}
          >
            <Text style={styles.modalText}>Oh No! Something went wrong.</Text>
          </Modal>
        </Portal>
      </PaperProvider>
    </>
  );
};
