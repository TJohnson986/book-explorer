import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './screens/HomeScreen';
import { DetailsScreen } from './screens/DetailsScreen';

const RootStack = createNativeStackNavigator({
  screens: {
    Home: {
      screen: HomeScreen,
      options: { title: 'Book Explorer' },
    },
    Details: {
      screen: DetailsScreen,
      options: { title: 'Book Details' },
    },
  },
});

export const MainNavigator = createStaticNavigation(RootStack);
