import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { styles } from '../../styles/style';

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
        <SafeAreaView>
          <ScrollView>
            <View style={styles.center}>
              <View>{movies}</View>
              {/* <Text style={styles.title}>Tab 1</Text> */}
            </View>
          </ScrollView>
        </SafeAreaView>
      );
    }
  }
}
