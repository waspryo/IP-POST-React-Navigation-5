import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { styles } from '../../../styles/fan/projects/project';

const win = Dimensions.get('window');

export default function componentName() {
  return (
    <View style={{ margin: 10, flex: 1 }}>
      <View style={styles.ShareViewContainer}>
        <View style={styles.ShareViewContainerOfInner}>
          <Text style={{ color: 'white', textAlign: 'center', fontSize: 16 }}> SNSでプレスリリースをシェアしよう！</Text>
        </View>
        <View style={{justifyContent: 'center',alignItems: 'center'}}>
          <Image
            style={{
              width: 320,
              resizeMode: 'contain',
              height: 220
            }}
            source={require('../../../../assets/release.png')} />
        </View>
        <View>
          <Image
            style={{
              width: 50,
              resizeMode: 'contain',
            }}/>
            <View>
              <Text>aaaaaaaaaaa</Text>
            </View>
        </View>
      </View>
    </View>
  );
}
