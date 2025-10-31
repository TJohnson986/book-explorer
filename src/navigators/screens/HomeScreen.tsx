import { useNavigation } from '@react-navigation/native';
import { Button, Text } from 'react-native';
import { Counter } from '../../components/Counter';
import { useGetPostsQuery } from '../../services/getBooks';

export const HomeScreen = () => {
  const navigation = useNavigation();
  const { data, error } = useGetPostsQuery();

  return (
    <>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details' as never)}
      />
      {data?.items.map((item: any) => (
        <Text key={item.id}>{item.volumeInfo.title}</Text>
      ))}
      {/* <Counter /> */}
    </>
  );
};
