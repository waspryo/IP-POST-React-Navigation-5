import React, { Component } from 'react';
import { View, Button, ImageBackground } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { styles } from './styles/style';

Feed = () => {

  const navigation = useNavigation()
  const route = useRoute()

  let detailResult = route.params
  return (
    <View style={styles.center}>
      <ImageBackground source={require('../assets/dejimon1.jpg')} style={styles.backgroundImage}>
        <View>
          <View style={styles.button}>
            <Button
              title='EMEPOS'
              style={{ color: 'white' }}
              // App.jsのname="Detail"を見て移動できる
              onPress={() => navigation.navigate('Detail', { screenName: "My Detail Screen" })}
              />
          </View>
        </View>
      </ImageBackground>
    </View>
  );

}
export default Feed;
