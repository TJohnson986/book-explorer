/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainNavigator from './src/navigators/MainNavigator';
import { Provider } from 'react-redux';
import { store } from './src/state/store';

if (__DEV__) {
  require('./ReactotronConfig');
}

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <MainNavigator isDarkMode={isDarkMode} />
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
