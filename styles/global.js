import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    /*Per Calvin University Brand Identity Standards 
      Fonts: Constantia, Gotham, Century Schoolbook
      Maroon: #8C2131
      Gold:   #F3CD00 
      Can be found at https://calvin.edu/dotAsset/f784aa74-291f-45b1-b45c-d6455663bcb4
    */
    container: {
      flex: 1,
      backgroundColor: '#fff',
      fontFamily: 'Century Schoolbook',
    },
  
    screen: {
      flex: 1,
      padding: 20,
      alignItems: 'center',
    },
  
    header: {
      padding: 10,
      fontSize: 35,
      // fontFamily: 'Constantia',
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
    },
  
    buttonText: {
      fontSize: 24,
      // fontFamily: 'Gotham',
      color: '#F3CD00'
    },
    
    //Need a way to add line breaks to text that is added to the post
    post: {
      width: 500,
    },

    postsWrapper: {
      paddingTop: 20,
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
      marginTop: 30,
      alignContent: 'center'
    },
  
    writePostWrapper: {
      position: 'absolute',
      paddingHorizontal: 10,
      bottom: 60,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
  
    input: {
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
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    addText: {
      color: '#F3CD00',
      fontSize: 30,
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
      paddingVertical: 15,
      paddingHorizontal: 15,
      backgroundColor: '#FFF',
      borderRadius: 15,
      borderColor: '#8C2131',
      borderWidth: 1,
      width: 250,
      marginBottom:10
    }
  });