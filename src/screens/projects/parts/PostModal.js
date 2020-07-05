import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, TouchableOpacity } from 'react-native';
import Cross from 'react-native-vector-icons/Entypo';
import Modal from "react-native-modal";


export default class PostModal extends React.Component {

  state = {
    isModalVisible: false
  }

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }

  render() {
    return (
      <TouchableOpacity onPress={this.toggleModal}>
        <View style={{
          height: 70,
          width: 250,
          flexDirection: 'row',
          backgroundColor: '#35C1B1',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10
        }}>
          <Cross name="arrow-with-circle-right" size={30} style={{ color: '#fff', marginRight: 10 }} />
          <Text style={{ color: '#fff', fontSize: 18 }}>投稿を報告</Text>
          <Modal isVisible={this.state.isModalVisible}>
            <View
              style={{
                backgroundColor: "#fff",
                height: 300,
                borderRadius: 10
              }}>
              <TouchableOpacity onPress={this.toggleModal} style={{ flexDirection: 'column', alignItems: 'flex-end' }}>
                <Cross name="circle-with-cross" size={30} style={{ color: 'black' }} />
              </TouchableOpacity>
              <View style={{ borderRadius: 10, borderColor: 'black', backgroundColor: '#3DC0B1', height: 80, margin: 20 }}>
                <TouchableOpacity onPress={this.toggleModal} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ color: 'black', textAlign: 'center' }}>Instagram通常投稿・Twitterで投稿した方</Text>
                </TouchableOpacity>
              </View>
              <View style={{ borderRadius: 10, backgroundColor: '#3DC0B1', height: 80, margin: 20 }}>
                <TouchableOpacity onPress={this.toggleModal} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ color: 'black', textAlign: 'center' }}>Instagramのストーリーズで投稿した方</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </TouchableOpacity>
    );
  }
}