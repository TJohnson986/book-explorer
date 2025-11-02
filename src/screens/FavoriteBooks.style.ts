import { useTheme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

export const useFavoriteBooksStyles = () => {
  const { colors } = useTheme();
  const styles = StyleSheet.create({
    noBooksContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    noBooksText: {
      color: colors.text,
    },
  });

  return styles;
};
