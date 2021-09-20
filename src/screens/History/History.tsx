import React from 'react';
import { View } from 'react-native';

import {Header, Separator, Typography } from '../../components';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

import { goToScreen, resetNavigation } from '../../navigation/controls';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors } from '../../utils/theme';

const goToExperimentalScreen = () => {
  goToScreen('Experimental');
};

const logOut = async () => {
  try {
    await AsyncStorage.setItem('userLoggedInFlag', 'false');
    resetNavigation();
  } catch (error) {
    console.log('Error storing userLoggedInFlag', error);
  }
};

const HistoryScreen = () => {
  return (
    <>
      <Header showBackButton={false} title="History" />
      <View style={styles.mainContainer}>
        <Typography size={18}>Historial</Typography>
        <Separator size={10} />
        <MaterialIcon name="lock-clock" size={30} color={colors.redPotter}/>
        <Separator size={10} />
      </View>
    </>
  );
};

export default HistoryScreen;
