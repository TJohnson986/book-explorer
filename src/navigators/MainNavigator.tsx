import {
  DefaultTheme,
  DarkTheme,
  NavigationContainer,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailsScreen } from '../screens/DetailsScreen';
import {
  MainNavigatorProps,
  RootStackParamList,
} from '../types/NavigationTypes';

export const LightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6200EE',
    background: '#FFFFFF',
    card: '#FFFFFF',
    text: '#000000',
    border: '#E0E0E0',
    notification: '#FF4500',
  },
};

export const CustomDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#BB86FC',
    background: '#121212',
    card: '#1E1E1E',
    text: '#FFFFFF',
    border: '#333333',
    notification: '#CF6679',
  },
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainNavigator = ({ isDarkMode }: MainNavigatorProps) => {
  const activeTheme = isDarkMode ? CustomDarkTheme : LightTheme;

  return (
    <NavigationContainer theme={activeTheme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Book Explorer' }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: 'Book Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
