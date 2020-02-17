import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',    
        backgroundColor:'#f1b950',
        borderBottomLeftRadius:100,
        borderTopRightRadius:100,
    },
    text :{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:100,
        alignSelf:'flex-start',
        marginTop:10,
        color:'#201b17',
        marginLeft:50
  
    },
    title : {
      fontSize:60,
      fontWeight:'bold',    
      marginTop:35,
      color:'#201b17',
      borderBottomColor:'#201b17',
      borderBottomWidth:3
    },
    search: {
      backgroundColor: 'white',
      color: '#201b17',
      borderRadius: 25,
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize:  27,
      marginTop:150,
      paddingVertical:20,
      paddingHorizontal:60
    },
    image: {
      width:200,
      height:200,
      marginLeft:15
    }
  })

  export default style;