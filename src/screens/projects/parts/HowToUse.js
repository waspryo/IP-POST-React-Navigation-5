import React from 'react';
import Book from 'react-native-vector-icons/Ionicons';
import { View, Text } from 'react-native';

export default function HowToUse() {
  return (
    <View style={{ margin: 20 }}>
      <View
        style={{
          height: 110,
          flexDirection: 'row',
          backgroundColor: '#35C1B1',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          borderRadius: 20
        }}
      >
        <Book name="ios-book" size={85} style={{ color: 'white' }} />
        <View style={{ flexDirection: 'column' }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white' }}>エメポス</Text>
          <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>の</Text>
          <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white' }}>トリセツ</Text>
        </View>
      </View>
    </View>
  );
}
