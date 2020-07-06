import React, { Component } from 'react';
import { View, Button, ImageBackground, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { styles } from './styles/style';
import { TouchableOpacity } from 'react-native-gesture-handler';

Feed = () => {

  const navigation = useNavigation()
  const route = useRoute()

  let detailResult = route.params
  return (
    <View style={styles.center}>
      <ImageBackground source={require('../assets/dejimon1.jpg')} style={styles.backgroundImage}>
        <View style={styles.layout}>
          <TouchableOpacity
            style={styles.button}
            title='EMEPOS'
            onPress={() => navigation.navigate('projects', { screenName: "My Detail Screen" })}
          >
            <TouchableOpacity
              style={styles.bntColor}
            // App.jsのname="Detail"を見て移動できる
            />
            <Text style={{color: '#fff', fontSize: 26}}>EMEPOS</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );

}
export default Feed;
