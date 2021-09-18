import { StyleSheet } from 'react-native';

import { IS_ANDROID } from '../../utils/constants';

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    height: IS_ANDROID ? 80 : 70,
  },
  sideButtonContainer: {
    height: 40,
    width: 40,
  },
  titleContainer: {
    alignItems: 'center',
    flex: 1,
  },
  image: {
    justifyContent: "center"
  }
});

export default styles;
