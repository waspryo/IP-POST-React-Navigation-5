import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { styles } from '../../styles/style';
import { useIsFocused } from '@react-navigation/native';


export default class Tab2 extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null
    }
  }

  componentDidMount() {
    return fetch('https://rickandmortyapi.com/api/character/1')
      .then((res) => res.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.episode,
        })
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
      let movies = this.state.dataSource.map((val, key) => {
        return <TouchableOpacity  key={key} style={styles.item}>
          <Text>{val}</Text>
        </TouchableOpacity>
      })

      return (
        // SafeAreaViewはスマホのトップに文字とか要素が被らないよう幅を取ってくれる
        <SafeAreaView>
          {/* ScrollViewは表示するものが多くはみ出る場合にスクロールできる */}
          <ScrollView>
            <View style={styles.center}>
              <View>{movies}</View>
            </View>
          </ScrollView>
        </SafeAreaView>
      );
    }
  }
}
