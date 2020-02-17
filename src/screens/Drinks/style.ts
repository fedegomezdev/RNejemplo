import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f4f4f8',
      color: '#2a2c41',
      fontWeight: 'bold',
    },
    inputText: {
      color: '#786a5d',
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 15,
      marginTop: 20,
      borderColor: '#2a2c41',
      borderBottomColor: '#2a2c41',
      backgroundColor: '#f4f4f8',
      width: 230,
      borderRadius: 10,
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#201b17',
      alignSelf: 'center',
      paddingTop:15
    },
    content: {
      flex: 1,
      backgroundColor:'#f1b950',
      alignSelf:'stretch',
      borderBottomLeftRadius:30,
      borderBottomRightRadius:30
    },
    cancel: {
      marginVertical:33,
      marginHorizontal:10,
      fontSize: 15,
      fontWeight: 'bold',
      color:'#201b17'
    },
    text: {
      fontSize:20,
      fontWeight:'bold',
      color:'#201b17'
    },
    contentDrink : {
      flex: 3,
      justifyContent: 'center',
      marginHorizontal:30,
      marginTop:17
    }
  });
  

export default styles;  