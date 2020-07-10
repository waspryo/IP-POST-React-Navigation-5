import * as React from 'react';
import { Button, Image, View, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class UploadImage extends React.Component {
  state = {
    image: null,
  };

  render() {
    let { image } = this.state;
    console.log(this.state.image, '11111111111')

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        <TouchableOpacity onPress={this._pickImage} >
          <Text>画像・動画を選択</Text>
        </TouchableOpacity>
      </View>
    );
  }

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

      // console.log(result);
    } catch (E) {
      console.log(E);
    }
  };
}