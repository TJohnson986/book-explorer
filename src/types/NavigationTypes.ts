import { BookResultProps } from './BookResult';

export type RootStackParamList = {
  Home: undefined;
  Details: { item: BookResultProps };
};

export interface MainNavigatorProps {
  isDarkMode: boolean;
}
