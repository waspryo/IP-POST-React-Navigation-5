import React, { Component } from 'react';
import { View, Button, ImageBackground } from 'react-native';

import { styles } from './styles/style';

class Feed extends Component {

  render() {
    return (
      <View style={styles.center}>
        <ImageBackground source={require('../assets/dejimon1.jpg')} style={styles.backgroundImage}>
        <View>
          <View style={styles.button}>
            <Button
              title='EMEPOS'
              style={{color: 'white'}}
              onPress={() => this.props.navigation.navigate('Detail', { screenName: "My Detail Screen"})}
              />
          </View>
        </View>
        </ImageBackground>
      </View>
    );
  }
}
export default Feed;
