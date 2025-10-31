import { BookDetail } from '../../components/BookDetail/BookDetail';
import { ScrollView } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { BookResultProps } from '../../types/BookResult';

type DetailsScreenRouteProp = RouteProp<
  { params: { item: BookResultProps } },
  'params'
>;

export const DetailsScreen = ({ route }: { route: DetailsScreenRouteProp }) => {
  const { item } = route.params;
  return (
    <ScrollView>
      <BookDetail {...item} />
    </ScrollView>
  );
};
