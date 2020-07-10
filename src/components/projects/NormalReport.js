import React from 'react';
import { View, Text, Image } from 'react-native';

import HowToUseLabel from '../projects/parts/HowToUseLabel';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

export default class Report extends React.Component {

  render() {
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
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 20, marginRight: 30, marginLeft: 30, padding: 6,borderRadius: 7 }}
        />
      </ScrollView>
    );
  }
}
