import { Pressable, useColorScheme } from 'react-native';
import { BookResultProps } from '../../types/BookResult';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/NavigationTypes';
import { Card } from 'react-native-paper';
import { styles } from './BookResult.style';
import { BookResult } from './BookResult';

export const BookResultCard = (item: BookResultProps) => {
  const scheme = useColorScheme();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <Pressable
      onPress={() => navigation.navigate('Details', { item })}
      style={({ pressed }) => {
        if (scheme === 'dark') {
          return [
            {
              backgroundColor: pressed ? '#333333' : '#121212',
            },
          ];
        } else {
          return [
            {
              backgroundColor: pressed ? 'lightgray' : 'white',
            },
          ];
        }
      }}
    >
      <Card key={item.id} style={styles.resultCard}>
        <BookResult {...item} />
      </Card>
    </Pressable>
  );
};
