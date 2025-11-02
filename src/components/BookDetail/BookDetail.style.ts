import { useTheme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

export const useBookDetailsStyles = () => {
  const theme = useTheme();
  const styles = StyleSheet.create({
    bodyTextContainer: {
      marginLeft: 10,
      marginTop: 20,
    },
    cardActions: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 10,
      marginTop: 40,
    },
    chip: {
      marginTop: 10,
    },
    container: {
      backgroundColor: theme.colors.card,
      margin: 10,
    },
    contentContainer: {
      flexDirection: 'column',
      backgroundColor: theme.colors.card,
    },
    text: {
      color: theme.colors.text,
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    thumbnail: {
      width: 200,
      height: 300,
      paddingVertical: 10,
      alignSelf: 'center',
    },
  });

  return styles;
};
