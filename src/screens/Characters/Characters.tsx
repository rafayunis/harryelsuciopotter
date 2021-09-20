import React, { useCallback, useState } from 'react';
import { Image, TextInput, View } from 'react-native';
import { ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useNetInfo } from '@react-native-community/netinfo';

import { DefaultButton, Header, Separator, Typography } from '../../components';
import styles from './styles';
import { colors } from '../../utils/theme';
import { IS_ANDROID } from '../../utils/constants';
import useCharactersData from './hooks/useCharactersData';
import { goToScreen } from '../../navigation/controls';

const GetHouseImage = ({house}:{house:string}) => {
    const imagesPath = '../../assets/images/houses/';
    let path = null;
    switch (house) {
      case 'Gryffindor':
        path = <Image source={require('../../assets/images/houses/gryffindor.webp')} style={styles.listItemImage} />;
        break;
      case 'Hufflepuff':
        path = <Image source={require('../../assets/images/houses/hufflepuff.webp')} style={styles.listItemImage} />;
        break;
      case 'Slytherin':
        path = <Image source={require('../../assets/images/houses/slytherin.webp')} style={styles.listItemImage} />;
        break;
      case 'Ravenclaw':
        path = <Image source={require('../../assets/images/houses/ravenclaw.webp')} style={styles.listItemImage} />;
        break;
      default:
        path = <Image source={require('../../assets/images/houses/nohouse.png')} style={styles.listItemImage} />;
        break;
    }
    return (path);
};

const ListItem = ({ id, name, house }: { id: number; name: string; house:string }) => (
  <TouchableOpacity onPress={() => goToScreen('CharacterDetails', { id })}>
    <View style={styles.listItemContainerShadow}>
      <View style={[styles.listItemContainer, IS_ANDROID ? styles.listItemContainerShadow : null]}>
        <GetHouseImage house={house}/>
        <Typography numberOfLines={2} align="center" size={14}>
          {name}
        </Typography>
      </View>
    </View>
  </TouchableOpacity>
);

const flatlistKeyExtractor = (item: Character) => `${item.id}`;

const renderFlatlistItem = ({ item }: { item: Character }) => (
  <ListItem id={item.id} name={item.name} house={item.house}/>
);

const CharactersScreen = () => {
  const [refreshFlag, setRefreshFlag] = useState<boolean>(false);
  const { characters, loading, errorOccurred } = useCharactersData(refreshFlag);

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
      <Header title="Personajes" showBackButton={false} />
      <View style={styles.mainContainer}>
        <View style={styles.searchFieldStyle}>
            <MaterialIcon name="search" size={30} color={colors.redPotter} style={styles.iconSearchStyle}/>
            <TextInput
                allowFontScaling={false}
                autoCapitalize="none"
                placeholder="Buscar personaje..."
                style={styles.textInput}
            />
        </View>
        <Typography color={colors.redPotter} size={25} variant="bold">
          PERSONAJES
        </Typography>
      </View>
      <View style={styles.charactersListWrapper}>
        <View style={styles.charactersListContainer}>
            <FlatList
            columnWrapperStyle={{justifyContent:'space-between', }}
            keyExtractor={flatlistKeyExtractor}
            refreshing={loading}
            horizontal={false}
            onRefresh={toggleRefreshFlag}
            data={characters}
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

