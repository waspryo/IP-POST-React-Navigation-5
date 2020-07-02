import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
  Button,
  TouchableOpacity
} from 'react-native';
import { styles } from '../../styles/fan/projects/project';
import axios from 'axios';

import WaitingView from './waitingView';


const win = Dimensions.get('window');


export default class ProjectList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5555/api/talent/projects#/')
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.data.projects
        })
        // console.log(this.state.dataSource)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    if (this.state.isLoading) {
      return (
        <WaitingView />
      )
    } else {
      let project = this.state.dataSource.map((val, key) => {
        return <View key={key} style={styles.item}>
          <Image
            style={{
              width: win.width,
              height: 450
            }}
            source={require('../../../assets/デジモン1.jpg')}
          />
          <View>
            <Text style={styles.itemTitle}>{val.title}</Text>
            <Text style={styles.itemText}>{val.instagram_micro_press_release}</Text>
          </View>
        </View>
      })
      return (
        // SafeAreaViewはスマホのトップに文字とか要素が被らないよう幅を取ってくれる
        /* ScrollViewは表示するものが多くはみ出る場合にスクロールできる */
        <ScrollView >
          <View style={styles.projectText}>
            <View>{project}</View>
          </View>
        </ScrollView >
      );
    }
  }
}