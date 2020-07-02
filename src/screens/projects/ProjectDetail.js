import React from 'react';
import { View, Text, SafeAreaView, ScrollView, Dimensions, ActivityIndicator, Image } from 'react-native';
import { styles } from '../../styles/fan/projects/project';
import { List } from 'react-native-paper';
import axios from 'axios';


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
                    <Text style={{fontSize: 27, fontWeight: 'bold'}}>{this.state.dataSource.project['title']}</Text>
                  </View>
                  <View style={styles.projectText}>
                    <Text style={{fontSize: 13, lineHeight: 23}}>{this.state.dataSource.project['instagram_micro_press_release']}</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{marginTop: 50}}>
              <List.AccordionGroup>
                  <List.Accordion
                    style={{borderColor: 'black'}}
                    left={props => <List.Icon {...props} icon="rocket" />}
                    title="最新情報" id="1"
                  >
                  <List.Item
                    style={{marginLeft: 60}}
                    left={props => <List.Icon {...props} icon="instagram" />}
                    title="Instagram" />
                  <List.Item
                    style={{marginLeft: 60}}
                    left={props => <List.Icon {...props} icon="twitter" />}
                    title="Twitter" />
                </List.Accordion>
                <List.Accordion
                  left={props => <List.Icon {...props} icon="account-heart-outline" />}
                  title="サポート" id="2">
                  <List.Item title="運営元" />
                  <List.Item title="お問い合わせ" />
                  <List.Item title="利用規約" />
                </List.Accordion>
                <View>
                  <List.Accordion
                    left={props => <List.Icon {...props} icon="bell" />}
                    title="その他" id="3">
                    <List.Item title="Nothing so far" />
                  </List.Accordion>
                </View>
              </List.AccordionGroup>
            </View>
          </ScrollView>
        </SafeAreaView>
      );
    }
  }
}
