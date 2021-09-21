import React, { useCallback, useState } from 'react';
import { ActivityIndicator, FlatList, Image, ScrollView, Text, View } from 'react-native';

import { DefaultButton, Header, Separator, Typography } from '../../components';
import useCharacterData from './hooks/useCharacterData';
import styles from './styles';
import { colors } from '../../utils/theme';
import { useNetInfo } from '@react-native-community/netinfo';


// @ts-ignore
const CharacterDetailsScreen = ({ route }) => {
  const { id, title } = route.params;
  const [ refreshFlag, setRefreshFlag ] = useState<boolean>(false);
  const { character, loading, errorOccurred } = useCharacterData(id,refreshFlag);

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
            {character.name}
          </Typography>
        </View>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.detailsText}>
            <Typography variant={'bold'} size={15}>Fecha de nacimiento:</Typography><Typography size={15}>{character.birth}</Typography>
            <Separator />
            <Typography variant={'bold'} size={15}>Especie:</Typography><Typography size={15}>{character.species}</Typography>
            <Separator />
            <Typography variant={'bold'} size={15}>Genero:</Typography><Typography size={15}>{character.gender}</Typography>
            <Separator />
        </View>
      </View>
    </>
  );
};

export default CharacterDetailsScreen;
