import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Button,
  TouchableOpacity
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import axios from 'axios';

import HowToUseLabel from '../projects/parts/HowToUseLabel';
// import UploadImage from './parts/UploadImage';

// import * as ImagePicker from 'expo-image-picker';
import { styles } from '../../styles/fan/projects/project';

export default class StoriesReport extends React.Component {

  state = {
    image: null,
    disabled: false
  };
  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        // allowsEditing: true,
        // aspect: [4, 3],
        // quality: 1,
      });
      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }
    } catch (E) {
      console.log(E);
    }
  };

  sendData() {
    axios.post('https://webhook.site/494c3968-5dbb-4fa3-a7c0-e31e28507676', {
      image: this.state.image,
    })
      .then(function (res) {
          console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    let { image } = this.state;
    const { navigation } = this.props;
    return (
      <ScrollView>
        <HowToUseLabel />
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <Image style={{ width: 150, height: 150 }} source={require('../../../assets/デジモン3.jpg')} />
          <View style={{ flex: 1, justifyContent: 'space-around' }}>
            <Text>【#今だからこそ伝えたいありがとう】エメポス 母の日・父の日キャンペーン開催！</Text>
            <Text>2020/07/05 17:00まで</Text>
          </View>
        </View>
        <Text>投稿のURLを貼り付けてください。</Text>
        <View style={{ marginTop: 50 }}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
            <TouchableOpacity onPress={this._pickImage}>
              <Text>画像・動画を選択</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={image ? styles.ReportButton : styles.DisabledReportButton}
          disabled={image ? this.state.disabled : true}
          onPress={() => this.sendData(navigation.navigate('projects'))}
        >
          <Text style={{ color: '#fff', textAlign: 'center' }}>報告を申請</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }


}
