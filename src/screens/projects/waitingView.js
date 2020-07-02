import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
// Icons
import Icon from 'react-native-vector-icons/Entypo';
import Apple from 'react-native-vector-icons/Fontisto';
import Insta from 'react-native-vector-icons/SimpleLineIcons';
import Book from 'react-native-vector-icons/Ionicons';
// Style
import { styles } from '../../styles/fan/projects/project';


export default function waitingView() {
  return (
    <ScrollView>
      <View style={styles.container}>
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
