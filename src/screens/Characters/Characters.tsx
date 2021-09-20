import React, { useCallback, useEffect, useState } from 'react';
import { Image, ScrollView, TextInput, View } from 'react-native';
import { ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useNetInfo } from '@react-native-community/netinfo';

import { AlertModal, DefaultButton, Header, Separator, Typography } from '../../components';
import styles from './styles';
import { colors } from '../../utils/theme';
import useBooksData from './hooks/useBooksData';
import { goToScreen } from '../../navigation/controls';
import { IS_ANDROID } from '../../utils/constants';


const goToExperimentalScreen = () => {
  goToScreen('Experimental');
};

const ListItem = ({ id, title, imageUrl }: { id: number; title: string; imageUrl:string }) => (
  <TouchableOpacity onPress={() => goToScreen('BookDetails', { id, title })}>
    <View style={styles.listItemContainerShadow}>
      <View style={[styles.listItemContainer, IS_ANDROID ? styles.listItemContainerShadow : null]}>
        <Image source={{uri:imageUrl}} style={styles.listItemImage} />
        <Typography numberOfLines={2} align="center" size={13}>
          {title}
        </Typography>
      </View>
    </View>
  </TouchableOpacity>
);

const flatlistKeyExtractor = (item: Book) => `${item.id}`;

const renderFlatlistItem = ({ item }: { item: Book }) => (
  <ListItem id={item.id} title={item.title} imageUrl={item.book_covers[0].URL}/>
);

const CharactersScreen = () => {
  const [refreshFlag, setRefreshFlag] = useState<boolean>(false);
  const { books, loading, errorOccurred } = useBooksData(refreshFlag);

  const netInfo = useNetInfo();

  const toggleRefreshFlag = useCallback(() => {
    setRefreshFlag(!refreshFlag);
  }, [refreshFlag]);

  if (!netInfo.isConnected) {
    return (
      <View style={styles.wholeScreenCenter}>
        <Typography size={20}>You don't have internet :'(</Typography>
      </View>
    );
  }

  if (loading) {
    return (
      <>
        <Header showBackButton={false} title="Home Screen" />
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
      <Header title="Books" />
      <View style={styles.mainContainer}>
        <View style={styles.searchFieldStyle}>
            <MaterialIcon name="search" size={30} color={colors.redPotter} style={styles.iconSearchStyle}/>
            <TextInput
                allowFontScaling={false}
                autoCapitalize="none"
                placeholder="Buscar un Libro..."
                style={styles.textInput}
            />
        </View>
        <Typography color={colors.redPotter} size={25} variant="bold">
          LIBROS
        </Typography>
      </View>
      <View style={styles.booksListWrapper}>
        <View style={styles.booksListContainer}>
          <FlatList
          columnWrapperStyle={{justifyContent:'space-between', }}
          keyExtractor={flatlistKeyExtractor}
          refreshing={loading}
          horizontal={false}
          onRefresh={toggleRefreshFlag}
          data={books}
          renderItem={renderFlatlistItem}
          numColumns={2}
          ItemSeparatorComponent={Separator}
          contentContainerStyle={styles.flatlistContent}
          style={styles.flatList}
        />
      </View>
      </View>
    </>
  );
};

export default CharactersScreen;

