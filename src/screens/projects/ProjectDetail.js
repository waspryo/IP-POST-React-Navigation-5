import React from 'react';
import { View, Text, SafeAreaView, ScrollView, Dimensions, ActivityIndicator, Image } from 'react-native';
import { styles } from '../../styles/fan/projects/project';
import axios from 'axios';

import ShareView from '../projects/parts/ShareView';
import WaitingView from '../../screens/projects/waitingView';
import AccordionGroup from './parts/AccordionGroup';

const win = Dimensions.get('window');


export default class ProjectDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: []
    }
  }

  componentDidMount() {
    // axios.get('http://localhost:5555/api/talent/projects/1659')
    axios.get('https://run.mocky.io/v3/112a4667-39f8-44f6-9940-5a6a96239b31')
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
          <WaitingView />
      )
    } else {

      return (
        // SafeAreaViewはスマホのトップに文字とか要素が被らないよう幅を取ってくれる
        <SafeAreaView>
          {/* ScrollViewは表示するものが多くはみ出る場合にスクロールできる */}
          <ScrollView>
            <View style={styles.center}>
              <View style={styles.detailLayout}>
                <View style={styles.projectImage}>
                  <Image
                    style={{
                      flex: 1,
                      alignSelf: 'stretch',
                      width: win.width,
                      height: 450
                    }}
                    source={require('../../../assets/デジモン2.png')} />
                </View>
                <View style={{marginTop: 30 ,marginBottom: 30}}>
                  <View style={styles.projectText}>
                    <Text style={{fontSize: 27, fontWeight: 'bold'}}>{console.log(this.state.dataSource, 'aaaaaaa')}</Text>
                  </View>
                  <View style={styles.projectText}>
                    <Text style={{fontSize: 13, lineHeight: 23}}>{this.state.dataSource.project['instagram_micro_press_release']}</Text>
                  </View>
                </View>
              </View>
            </View>
            <ShareView/>
            <AccordionGroup/>
          </ScrollView>
        </SafeAreaView>
      );
    }
  }
}
