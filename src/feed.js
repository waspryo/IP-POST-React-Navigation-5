import React, { Component } from 'react';
import { View, Text, Button, Image, StyleSheet, Dimensions, ImageBackground } from 'react-native';

import { styles } from './styles/style';

// const { width, height } = Dimensions.get('window');
class Feed extends Component {

  render() {
    return (
      <View style={styles.center}>
        <ImageBackground source={require('../assets/dejimon1.jpg')} style={styles.backgroundImage}>
        <View>
          <View style={styles.button}>
            <Button
              title='Go to Feed Item'
              onPress={() => this.props.navigation.navigate('Detail')}
              />
          </View>
        </View>
        </ImageBackground>
      </View>
    );
  }
}
export default Feed;
