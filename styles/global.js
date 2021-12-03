import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    /*Per Calvin University Brand Identity Standards 
      Fonts: Constantia, Gotham, Century Schoolbook
      Maroon: #8C2131
      Gold:   #F3CD00 
      Can be found at https://calvin.edu/dotAsset/f784aa74-291f-45b1-b45c-d6455663bcb4
    */
    container: {
      flex:1,
      backgroundColor: '#fff',
      fontFamily: 'Century Schoolbook',
    },
  
    screen: {
      flex: 1,
      padding: 10,
      alignItems: 'center',
    },
  
    header: {
      padding: 10,
      fontSize: 35,
      fontWeight: 'bold',
      alignItems: 'center',
    },
  
    button: {
      width: 120,
      height: 60,
      backgroundColor: '#8C2131',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 13
    },

    addPost: {
      width: 70,
      height: 70,
      backgroundColor: '#8C2131',
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      right: 20,
      position: 'absolute',
      bottom: 30,
    },
  
    buttonText: {
      fontSize: 24,
      color: '#F3CD00'
    },
    
    //Need a way to add line breaks to text that is added to the post
    postsWrapper: {
      width: '100%',
    },
    
    sectionTitle: {
      fontSize: 24,
      //fontFamily: 'Gotham',
      fontSize: 24,
      fontWeight: "bold",
      alignItems: 'center',
    },
    
    items: {
      top:25,
      margin:5,
      alignContent: 'center',
      marginBottom: 70,
    },
  
    input: {
      marginTop: 10,
      paddingVertical: 15,
      paddingHorizontal: 15,
      backgroundColor: '#FFF',
      borderRadius: 60,
      borderColor: '#8C2131',
      borderWidth: 1,
      width: 250,
    },
  
    addWrapper: {
      width: 60,
      height: 60,
      backgroundColor: '#8C2131',
      borderRadius: 60,
      margin: 40,
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    addText: {
      color: '#F3CD00',
      fontSize: 40,
      fontWeight: 'bold',
    },
    paragraphs: {
      fontSize: 16,
      padding: 20,
    },
    about: {
      height: 30,
      width: 30,
      fontSize: 24,
      paddingLeft: 7,
      marginRight: 20,
      borderWidth: 1,
      borderRadius: 100,
      opacity: 0.6
    },
    loginLogo: {
      width: 250,
      height: 250
    },

    loginTextBox: {
      position: 'absolute',
      paddingHorizontal: 10,
      bottom: 50,
      alignItems: 'center'
    },
    loginInput: {
      paddingVertical: 15,
      paddingHorizontal: 15,
      backgroundColor: '#FFF',
      borderRadius: 19,
      borderColor: '#8C2131',
      borderWidth: 1,
      width: 250,
      marginBottom: 10
    },
  });