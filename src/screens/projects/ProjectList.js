import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native';
import { styles } from '../../styles/fan/projects/project';
import axios from 'axios';

import WaitingView from './waitingView';
import AccordionGroup from './parts/AccordionGroup';


const win = Dimensions.get('window');

class ProjectList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: [],
      image: [],
      status: null
    }
  }


  componentDidMount() {
    // axios.get('http://localhost:5555/api/talent/projects#/')
    axios.get('http://localhost:5556/api/talent/projects')
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.data.projects
        })
        // console.log(this.state.image, '11111111')
        // console.log(this.state.dataSource)
      })
      .catch((err) => {
        console.log(err)
      })
    // axios.get('https://run.mocky.io/v3/dbcbead1-6bfb-461d-94b2-21fd1d049024')
    //   .then((responseJson) => {
    //     this.setState({
    //       isLoading: false,
    //       image: responseJson.data.image
    //     })
    //     // console.log(this.state.image)
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
  }

  render() {
    const { navigation } = this.props;
    const { status } = this.state;
    if (this.state.isLoading) {
      return (
        <WaitingView />
      )
    } else {
      let project = this.state.dataSource.map((val, key) => {
        return <TouchableOpacity
          key={key}
          style={styles.item}
          onPress={() => navigation.navigate('詳細')}
        >
          <View>
            {val.media_files.map((value, key) => {
              return <Image style={{ width: win.width, height: 400 }} key={key} source={{ uri: value.signed_url }} />
            })}
            <Text style={styles.itemTitle}>{val.id}</Text>
            <Text style={styles.itemTitle}>{val.title}</Text>
            <Text style={styles.itemText}>{val.instagram_micro_press_release}</Text>
          </View>
        </TouchableOpacity>
      })
      return (
        // SafeAreaViewはスマホのトップに文字とか要素が被らないよう幅を取ってくれる
        /* ScrollViewは表示するものが多くはみ出る場合にスクロールできる */
        <ScrollView >
          <View style={styles.projectText}>
            <View>{project}</View>
          </View>
          <AccordionGroup />
        </ScrollView >
      );
    }
  }
}
export default ProjectList