import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, TouchableOpacity } from 'react-native';
import Cross from 'react-native-vector-icons/Entypo';
import Modal from "react-native-modal";
import { styles } from '../../../styles/fan/projects/project';


export default class PostModal extends React.Component {
  state = {
    isModalVisible: false
  }

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }

  render() {
    const navigation = this.props.passPropsToModal.passPropsToShareView.navigation
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
                <TouchableOpacity
                  onPress={() => this.toggleModal(navigation.push('通常投稿レポート'))} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <View style={{ margin: 20 }}>
                    <Text style={styles.ProjectModal}>Instagram通常投稿・Twitterで</Text>
                    <Text style={styles.ProjectModal}>投稿した方</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{ borderRadius: 10, backgroundColor: '#3DC0B1', height: 80, margin: 20 }}>
                <TouchableOpacity onPress={() => this.toggleModal(navigation.push('ストーリーズ投稿レポート'))} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ color: '#fff', textAlign: 'center', padding: 15, fontSize: 18 }}>Instagramのストーリーズで投稿した方</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </TouchableOpacity>
    );
  }
}