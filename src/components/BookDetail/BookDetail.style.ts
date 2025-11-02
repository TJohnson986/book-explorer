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
    headerText: {
      color: theme.colors.text,
      fontWeight: 'bold',
      marginTop: 5,
    },
    text: {
      color: theme.colors.text,
    },
    title: {
      textAlign: 'center',
      color: theme.colors.text,
      marginBottom: 10,
    },
    subTitle: {
      textAlign: 'center',
      color: theme.colors.text,
      marginBottom: 10,
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
