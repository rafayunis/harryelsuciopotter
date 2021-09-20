import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../utils/theme';


const styles = StyleSheet.create({
  searchFieldStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.yellowPotter,
      height: 45,
      margin: 10,
      borderRadius: 25,
      width: '90%'
  },
  iconSearchStyle: {
      marginLeft: 20,
      marginTop:3,
  },
  mainContainer: {
    /*backgroundColor: '#E5E5E5',*/
    alignItems: 'center',
    flex: 0,
    justifyContent: 'center',
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
  },
  booksListWrapper: {
    backgroundColor: '#ffffff',
    flex: 1,
    borderRadius: 20,
    width: '90%',
    alignSelf: 'center',
    marginBottom: 20,
  },
  booksListContainer: {
    backgroundColor: '#F9F9F9',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    borderRadius: 20,
    paddingTop: 20
  },
  textInput: {
    color: colors.redPotter,
    flex: 1,
    marginLeft: 10
  },
  listItemContainer: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderColor: '#fff',
    borderRadius: 25,
    borderWidth: 1,
    height: 220,
    justifyContent: 'flex-start',
    paddingHorizontal: 0,
    width: Dimensions.get('screen').width/2.4 - 12,
  },
  listItemImage: {
    height: 160,
    width:'100%',
    borderRadius: 25,
    marginBottom: 10,
  },
  listItemContainerShadow: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  wholeScreenCenter: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  flatList: {
    flex: 1,
    width: '100%',
  },
  flatlistContent: {
    flexDirection: 'column',
    paddingHorizontal:20,
  },
});

export default styles;
