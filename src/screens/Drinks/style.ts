import {StyleSheet, Platform, StatusBar} from 'react-native';
import color from '../../theme/palette';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',   
  },
  inputText: {
    color: color.colorText,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 20,
    backgroundColor: color.backgroundWhite,
    width: 230,
    borderRadius: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: color.colorText,
    alignSelf: 'center',
    paddingTop: 15,
  },
  content: {
    paddingBottom: 10,
    backgroundColor: color.primary,
    alignSelf: 'stretch',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingTop:0
  },
  cancel: {
    marginVertical: 33,
    marginHorizontal: 10,
    fontSize: 15,
    fontWeight: 'bold',
    color: color.colorText,
  },
  cancelDisabled: {
    marginVertical: 33,
    marginHorizontal: 10,
    fontSize: 15,
    fontWeight: 'bold',
    color: color.primary,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: color.colorText,
  },
  contentDrink: {
    flex: 3,
    justifyContent: 'center',
    marginHorizontal: 5,
    marginTop: 17,
    backgroundColor:color.backgroundWhite
  },
  textNotFound: {
    marginTop: 250,
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft:15
  },
  viewText: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  viewStart: {   
    justifyContent: 'center',
  },
  activityIndicator: {
    marginTop: 100,
    marginHorizontal: 30,
  },
});

export default styles;
