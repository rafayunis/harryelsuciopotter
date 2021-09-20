import React, { useCallback, useState } from 'react';
import { ActivityIndicator, FlatList, Image, ScrollView, Text, View } from 'react-native';

import { DefaultButton, Header, Separator, Typography } from '../../components';
import useBookData from './hooks/useBookData';
import styles from './styles';
import { colors } from '../../utils/theme';
import { useNetInfo } from '@react-native-community/netinfo';

// @ts-ignore
const BookDetailsScreen = ({ route }) => {
  const { id, title } = route.params;
  const [ refreshFlag, setRefreshFlag ] = useState<boolean>(false);
  const { book, loading, errorOccurred } = useBookData(id,refreshFlag);

  const netInfo = useNetInfo();

  const toggleRefreshFlag = useCallback(() => {
    setRefreshFlag(!refreshFlag);
  }, [refreshFlag]);

  if (loading) {
    return (
      <>
        <Header title={title} />
        <View style={styles.wholeScreenCenter}>
          <ActivityIndicator size="large" color={colors.mainOrange} />
        </View>
      </>
    );
  }

  if (errorOccurred) {
    return (
      <View style={styles.wholeScreenCenter}>
        <Typography size={20}>An unknown error occurred :'(</Typography>
        <Separator size={15} />
        <DefaultButton text="Retry" onPress={toggleRefreshFlag} />
      </View>
    );
  }

  return (
    <>
      <Header title={title} />
      <View style={styles.mainContainer}>
        <View style={styles.mainTitle}>
          <Typography color={colors.redPotter} size={25} variant={'bold'} align='center'>
            {book.title}
          </Typography>
        </View>
      </View>
      <View style={styles.detailsContainer}>
        <Image source={{uri:book.book_covers[0].URL}} style={styles.image} />
        <View style={styles.detailsText}>
            <Typography variant={'bold'} size={12}>Autor:</Typography><Typography>{book.author}</Typography>
            <Separator />
            <Typography variant={'bold'} size={12}>Fecha Publicación (UK): </Typography><Typography>{book.publish_date[0].UK}</Typography>
            <Separator />
            <Typography variant={'bold'} size={12}>Linea de tiempo de la historia: </Typography>
            <FlatList
              data={book.plot_take_place_years}
              renderItem={({item}) => <Typography>{item}</Typography>}
            />
        </View>
      </View>
    </>
  );
};

export default BookDetailsScreen;
