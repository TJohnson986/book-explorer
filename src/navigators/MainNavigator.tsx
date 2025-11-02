import {
  DefaultTheme,
  DarkTheme,
  NavigationContainer,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailsScreen } from '../screens/DetailsScreen';
import { FavoriteBooksScreen } from '../screens/FavoriteBooks';
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

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

const MainNavigator = ({ isDarkMode }: MainNavigatorProps) => {
  const activeTheme = isDarkMode ? CustomDarkTheme : LightTheme;

  const MainStack = () => {
    return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: '' }}
        />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer theme={activeTheme}>
      <Drawer.Navigator
        initialRouteName="Home"
        defaultStatus="closed"
        screenOptions={{
          drawerType: 'front',
          drawerStyle: { width: '75%' },
          drawerPosition: 'right',
          overlayColor: 'transparent',
          swipeEdgeWidth: 50,
          swipeEnabled: true,
        }}
      >
        <Drawer.Screen
          name="FavoriteBooks"
          component={FavoriteBooksScreen}
          options={{ title: 'Favorite Books' }}
        />
        <Drawer.Screen
          name="Home"
          component={MainStack}
          options={{ title: 'Book Explorer' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
