import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text } from 'react-native';
import { styles } from '../../../styles/fan/projects/project';
import Icon from 'react-native-vector-icons/Entypo';

export default function HowToUse() {
  return (
    <View style={styles.howToUseEmepos}>
      <LinearGradient
        colors={['#35C1B1', '#44A5FF']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          width: '100%',
          height: 50,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <View style={{ backgroundColor: '#fff', borderRadius: 30, width: 70 }}>
          <Text style={{ textAlign: 'center', color: '#35C1B1', fontWeight: 'bold' }}>すぐ{`\n`}わかる！</Text>
        </View>
        <Text style={styles.howToUseEmeposText}>エメポスのトリセツ</Text>
        <Icon name="open-book" size={20} color="white" />
      </LinearGradient>
    </View>
  );
}
