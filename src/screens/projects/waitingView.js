import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
// Icons
import Icon from 'react-native-vector-icons/Entypo';
import Apple from 'react-native-vector-icons/Fontisto';
import Insta from 'react-native-vector-icons/SimpleLineIcons';
// Style
import { styles } from '../../styles/fan/projects/project';

import HowToUse from './parts/HowToUse';
import HowToUseLabel from './parts/HowToUseLabel';


export default function waitingView() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <HowToUseLabel />
        <View>
          <View
            style={{
              margin: 40,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <Text style={styles.headingText}>あなたにマッチするプレスリリースを</Text>
            <Text style={styles.headingText}>届ける準備をしています。</Text>
          </View>
          <View
            style={{
              height: 200,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <Icon name="flower" size={90} color="#35C1B1"></Icon>
          </View>
          <View style={{
            margin: 17,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Text style={styles.textNotice}>プレスリリースが配信されると</Text>
            <Text style={styles.textNotice}>「STRAWBERRY」アプリからプッシュ通知でお知らせします♪</Text>
            <Text style={styles.textNotice} style={{ marginTop: 25 }}>1000円&ポイントGETのチャンスを逃さないために</Text>
            <Text style={styles.textNotice}>アプリのプッシュ通知設定をONにしておきましょう！</Text>
            <Text style={styles.textNotice} style={{ marginTop: 25 }}>ポイントがたまるとあなたのランクがどんどんUP♪</Text>
            <Text style={styles.textNotice}>ゲーム感覚でエメポスを楽しんで</Text>
            <Text style={styles.textNotice} style={{ marginTop: 25 }}>企業のプレスリリースをフォロワーに届けよう！</Text>
          </View>
          <View>
            <View style={{
              flex: 1,
              height: 250,
              margin: 14,
              backgroundColor: '#FFFFFF',
              // justifyContent: 'center',
              borderRadius: 10,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}>
              <LinearGradient
                colors={['#393FFF', '#44A5FF']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{
                  height: 40,
                  justifyContent: 'center',
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                }}
              >
                <Text style={{ color: 'white', textAlign: 'center', fontSize: 16 }}> STRAWBERRYはダウンロードしましたか？</Text>
              </LinearGradient>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                <Text style={{ color: '#818181', textAlign: 'center', fontSize: 16 }}> iOSアプリ「STRAWBERRY」</Text>
              </View>
              <View
                style={{
                  marginLeft: 20,
                  marginRight: 20,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Text>「STRAWBERRY」をダウンロードするとEMERALD POSTの新着リリースをプッシュ通知でいち早くお届け。
                      報酬ゲットのチャンスを見逃すな！</Text>
              </View>
              <View
                style={{
                  marginBottom: 30,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center'
                }}
              >
                <Apple name="applemusic" size={45} />
                <Insta name="social-instagram" size={45} />
              </View>
            </View>
            <HowToUse />
            <View style={{ marginBottom: 20 }}>
              <Text style={{ textAlign: 'center' }}>エメポスをうまく使うために、ぜひ読んでね！</Text>
            </View>
          </View>
        </View>
        {/* <ActivityIndicator/> */}
      </View>
    </ScrollView>
  );
}
