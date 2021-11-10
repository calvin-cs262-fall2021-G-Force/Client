import React, {useState} from 'react';
import { Alert, Modal, Keyboard, KeyboardAvoidingView, Platform, Pressable, Text, TextInput, View, TouchableOpacity, ScrollView} from 'react-native';
import Post from '../components/Post';
import { globalStyles } from '../styles/global';
import { postStyles } from '../styles/post';

export default function HomeScreen({ navigation }) {
  const hardCodePost1 = ["Culver's", (new Date('05 Nov 2021 17:00:00 GMT')).toLocaleString(), "Anyone want to go eat some Culver's in the next half hour or so?"]
  const hardCodePost2 = ["Subway", (new Date('5 Nov 2021 18:00:00 GMT')).toLocaleString(), "Headed to Subway if anyone wants to grab something to eat quick."]
  const hardCodePost3 = ["Anna's House", (new Date('6 Nov 2021 12:30:00 GMT')).toLocaleString(), "Going to Anna's House tomorrow. Anyone wanna join?"]
  
  const [postText, setText] = useState();
  const [postItems, setPostItems] = useState([hardCodePost1, hardCodePost2, hardCodePost3]);
  const [modalVisible, setModalVisible] = useState(false);

  const handleAddPost = () => {
    Keyboard.dismiss();
    const curDate = new Date().toLocaleString();
    setPostItems([...postItems, [postText, curDate, "Details will be found here"]]);
    setText(null);
  }

  return (
    <View style={globalStyles.screen}>
      <View style={globalStyles.postsWrapper}>
        <Text style={globalStyles.sectionTitle}>Posts</Text>
        <View style={globalStyles.items}>
          <ScrollView >
          {
            postItems.map((item, index) => {
              return (
                <TouchableOpacity style={postStyles.item} key={index} onPress={() => navigation.navigate('Post', {item})}>
                  <Post text={item[0]} date={item[1]}/>
                </TouchableOpacity>
              )
            })
          }
          </ScrollView>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={globalStyles.centeredView}>
          <View style={globalStyles.modalView}>
            <Text style={globalStyles.modalText}>Hello World!</Text>
            <TouchableOpacity
              style={[globalStyles.button, globalStyles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={globalStyles.textStyle}>Hide Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={[globalStyles.button, globalStyles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={globalStyles.textStyle}>Show Modal</Text>
      </TouchableOpacity>
    </View>
  );
}