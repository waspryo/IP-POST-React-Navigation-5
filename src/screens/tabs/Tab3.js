import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { styles } from '../../styles/style';


export default class Tab3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: []
    }
  }

  componentDidMount() {
    return fetch('http://localhost:5555/api/talent/profile')
      .then((res) => res.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson
        })
        console.log('aaaaaaaaaaaaaa')
        console.log(this.state.dataSource)
      })
      .catch((error) => {
        console.log(error)
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          {/* ローディング用のコンポーネント */}
          <ActivityIndicator />
        </View>
      )
    } else {
      // let profile = Object.keys(this.state.dataSource).map((val, key) => {
      //   return <TouchableOpacity key={key} style={styles.item}>
      //     <Text>{val}</Text>
      //   </TouchableOpacity>
      // })
      let profile = Object.keys(this.state.dataSource).map((val, key) => {
        return <TouchableOpacity key={key} style={styles.item}>
          <Text>{val}</Text>
        </TouchableOpacity>
      })

      return (
        // SafeAreaViewはスマホのトップに文字とか要素が被らないよう幅を取ってくれる
        <SafeAreaView>
          {/* ScrollViewは表示するものが多くはみ出る場合にスクロールできる */}
          <ScrollView>
            <View style={styles.center}>
              {/* <View>{profile}</View> */}
              <View>{profile}</View>
            </View>
          </ScrollView>
        </SafeAreaView>
      );
    }
  }
}
