import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from './styles/style';

class Detail extends Component {
  render() {
    return (
      <View style={styles.center}>
        <Text style={styles.title}>Detail Screen</Text>
          <Button
            title='View Buttom Tabs'
            // App.jsのname="Bottom Tabs"を見て移動できる
            onPress={() => this.props.navigation.navigate('Bottom Tabs')}
          />
          <Button
            title='View Top Tabs'
            onPress={() => this.props.navigation.navigate('Top Tabs')}
          />
      </View>
    );
  }
}
export default Detail;