import React from 'react';
import { View, Text, SafeAreaView, ScrollView, Dimensions, ActivityIndicator, Image } from 'react-native';
import { styles } from '../../styles/style';
import axios from 'axios';


const win = Dimensions.get('window');


export default class Tab2 extends React.Component {

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
        // console.log(this.state.dataSource)
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
                  source={require('../../../assets/デジモン1.jpg')}/>
              </View>
              <View style={styles.projectText}>
                <Text>{this.state.dataSource.project['body']}</Text>
              </View>
              <View style={styles.projectText}>
                <Text>{this.state.dataSource.project['instagram_micro_press_release']}</Text>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      );
    }
  }
}
