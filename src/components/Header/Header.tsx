import React from 'react';
import { Image, ImageBackground, TouchableOpacity, View } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native-safe-area-context';

import Separator from '../Separator';
import Typography from '../Typography';
import styles from './styles';
import { colors } from '../../utils/theme';

import { goBack } from '../../navigation/controls';

interface Props {
  onPressBackButton?: () => void;
  onPressRightButton?: () => void;
  RightSideComponent?: React.FC;
  showBackButton?: boolean;
  title: string;
}
const image = '../../assets/images/top-bg.png';

const Header = ({
  onPressBackButton,
  onPressRightButton,
  RightSideComponent,
  showBackButton,
  title,
}: Props) => {
  return (
    <>
      <SafeAreaView edges={['top']} />
      <ImageBackground source={require(image)} resizeMode="cover" style={styles.image}>
      <View style={styles.mainContainer}>
        {showBackButton ? (
          <TouchableOpacity onPress={onPressBackButton} style={styles.sideButtonContainer}>
            <MaterialIcon name="navigate-before" size={35} color={colors.white} />
          </TouchableOpacity>
        ) : (
          <Separator isHorizontal size={40} />
        )}
        <View style={styles.titleContainer}>
          <Image
                source={require('../../assets/images/hp-logo.png')}
                style={{ width: 40, height: 44 }}
              />
        </View>
        {RightSideComponent ? (
          <TouchableOpacity onPress={onPressRightButton} style={styles.sideButtonContainer}>
            <RightSideComponent />
          </TouchableOpacity>
        ) : (
          <Separator isHorizontal size={40} />
        )}
      </View>
      </ImageBackground>
    </>
  );
};

Header.defaultProps = {
  onPressBackButton: goBack,
  onPressRightButton: () => {},
  showBackButton: true,
};

export default Header;
