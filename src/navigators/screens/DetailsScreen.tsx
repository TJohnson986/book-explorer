import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';

export const DetailsScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Here's the details screen</Text>
    </View>
  );
};
