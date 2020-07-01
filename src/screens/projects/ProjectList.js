import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Dimensions,
  ActivityIndicator,
  Image } from 'react-native';
import { styles } from '../../styles/style';
import axios from 'axios';


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
      axios.get('http://localhost:5555/api/talent/projects/1659')
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.data
        })
        console.log(this.state.dataSource)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      )
    } else {

      return (
        // SafeAreaViewはスマホのトップに文字とか要素が被らないよう幅を取ってくれる
        <SafeAreaView>
          {/* ScrollViewは表示するものが多くはみ出る場合にスクロールできる */}
          <ScrollView>
            <View style={styles.center}>
              <View style={styles.projectImage}>
                <Image
                  style={{
                    flex: 1,
                    alignSelf: 'stretch',
                    width: win.width,
                    height: 350
                  }}
                  source={require('../../../assets/デジモン2.png')}/>
              </View>
              <View style={styles.projectText}>
                <Text>{this.state.dataSource.project['body']}</Text>
              </View>
              <View style={styles.projectText}>
                <Text>{this.state.dataSource.project['company_name']}株式会社</Text>
                <Text>{this.state.dataSource.project['updated_at']}まで</Text>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      );
    }
  }
}
