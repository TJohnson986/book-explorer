import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native';

export const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <Button
      title="Go to Details"
      onPress={() => navigation.navigate('Details' as never)}
    />
  );
};
