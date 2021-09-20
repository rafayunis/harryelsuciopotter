import { StyleSheet } from 'react-native';
import { colors } from '../../utils/theme';

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    flex: 0,
    justifyContent: 'center',
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: "700",
    color: colors.redPotter,
    textAlign: 'center',
    lineHeight: 25,

  },
  wholeScreenCenter: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  mainTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.yellowPotter,
    height: 109,
    margin: 10,
    borderRadius: 25,
    width: '90%',
    paddingHorizontal: 20,
},
detailsContainer: {
  flex: 1,
  flexDirection: 'row',
  flexWrap: 'wrap',
  width: '100%',
  paddingHorizontal: 20,
},
image: {
  width: '50%',
  height: 278,
  paddingRight: 10,
  borderRadius: 15,
  marginRight: 10,
  resizeMode: 'stretch',
},
detailsText: {
  paddingTop: 10,
  width: '47%',
  height: 200,
}
});

export default styles;
