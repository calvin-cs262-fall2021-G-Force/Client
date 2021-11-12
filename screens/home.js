import React, {useState} from 'react';
import { Alert, Modal, Keyboard, KeyboardAvoidingView, Platform, Pressable, Text, TextInput, View, TouchableOpacity, ScrollView, StyleSheet} from 'react-native';
import Post from '../components/Post';
import { globalStyles } from '../styles/global';
import { postStyles } from '../styles/post';

export default function HomeScreen({ navigation }) {
  // const hardCodePost1 = ["Culver's", (new Date('05 Nov 2021 17:00:00 GMT')).toLocaleString(), "Anyone want to go eat some Culver's in the next half hour or so?"]
  // const hardCodePost2 = ["Subway", (new Date('5 Nov 2021 18:00:00 GMT')).toLocaleString(), "Headed to Subway if anyone wants to grab something to eat quick."]
  // const hardCodePost3 = ["Anna's House", (new Date('6 Nov 2021 12:30:00 GMT')).toLocaleString(), "Going to Anna's House tomorrow. Anyone wanna join?"]
  
  // const [postText, setText] = useState();
  // const [postItems, setPostItems] = useState([hardCodePost1, hardCodePost2, hardCodePost3]);
  const [modalVisible, setModalVisible] = useState(false);

  // const handleAddPost = () => {
  //   Keyboard.dismiss();
  //   const curDate = new Date().toLocaleString();
  //   setPostItems([...postItems, [postText, curDate, "Details will be found here"]]);
  //   setText(null);
  // }

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});