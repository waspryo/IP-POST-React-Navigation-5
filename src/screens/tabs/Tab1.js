import React, { Component } from 'react';
import { View, ActivityIndicator, Text,Image, Dimensions } from 'react-native';
import { styles } from '../../styles/style';

import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';

const win = Dimensions.get('window');

class Tab1 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoadding: true,
      projects: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5555/api/talent/projects')
      .then((responseJson) => {
        this.setState({
          isLoadding: false,
          projects: responseJson.data.projects
        })
        // console.log(this.state.projects)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {

    if (this.state.isLoadding) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      )
    } else {
      let project = this.state.projects.map((val, key) => {
        return <TouchableOpacity key={key} style={styles.item}>
            <Image
              style={{
                width: win.width,
                height: 450
              }}
              source={require('../../../assets/デジモン2.png')}
            />
          <View style={styles.title}>
            <Text>{val.body}</Text>
          </View>
        </TouchableOpacity>
      })

      return (
          <ScrollView>
            <View style={styles.center}>
              <View>{project}</View>
            </View>
          </ScrollView>
      );
    }
  }
}


export default Tab1;