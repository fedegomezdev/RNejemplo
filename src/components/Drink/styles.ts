import {StyleSheet} from 'react-native';
import color from '../../theme/palette';

const style = StyleSheet.create({
  text: {
    color: color.colorText,
    marginBottom: 15,
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 15,
    marginLeft:15
  },
  image: {
    width: 310,
    height: 440,
    borderRadius: 30,
    marginRight: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
  },
});

export default style;
