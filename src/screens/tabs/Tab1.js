import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../../styles/style';

import * as data from '../../../data.json';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

let influencer = data.projects.map((val, key) => {
  return <TouchableOpacity onPress={() => alert(val['id'])} key={key} style={styles.item}>
    <Text style={styles.text}>
      Id {val['id']}
    </Text>
    <Text>
      {val['title']}
    </Text>
  </TouchableOpacity>
})
class Tab1 extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.center}>
            <View>{influencer}</View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}


export default Tab1;