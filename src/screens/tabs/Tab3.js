import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../styles/style';
import { useIsFocused } from '@react-navigation/native';

Tab3 = () => {
  const isFocused = useIsFocused()
  console.log(isFocused)

  return <View style={styles.center}>
    <Text style={styles.title}>Tab 3</Text>
  </View>
}


export default Tab3;