import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { styles } from '../../../styles/fan/projects/project';

import Tabbar from './Tabbar';

const win = Dimensions.get('window');

export default function componentName() {
  return (
    <View style={{ margin: 10, flex: 1 }}>
      <View style={styles.ShareViewContainer}>
        <View style={styles.ShareViewContainerOfInner}>
          <Text style={{ color: 'white', textAlign: 'center', fontSize: 16 }}> SNSでプレスリリースをシェアしよう！</Text>
        </View>
        <View style={{justifyContent: 'center',alignItems: 'center'}}>
          <Image
            style={{
              width: 320,
              resizeMode: 'contain',
              height: 220
            }}
            source={require('../../../../assets/release.png')} />
        </View>
        <View>
          <Image
            style={{
              width: 50,
              resizeMode: 'contain',
            }}/>
            <View style={{flexDirection: 'row', margin: 10, justifyContent: 'space-between', alignItems: 'center'}}>
              <View style={{backgroundColor: '#3DC0B1', flexDirection: 'column', borderRadius: 4, padding: 3}}>
                <Text style={styles.ShareViewStep1}>STEP</Text>
                <Text style={styles.ShareViewStep1}>01</Text>
              </View>
              <Text style={{color: '#3DC0B1', fontWeight: 'bold'}}>投稿するマイクロプレスリリースをコピーしよう！</Text>
            </View>
            <Text style={{margin: 10}}>下記マイクロプレスリリースをコピーして投稿に利用してください。自分のコメントを追記してもOK！</Text>
            <Text style={{textAlign: 'center', color: '#3DC0B1', marginTop: 8}}>＞より多くのポイントをゲットするには？</Text>
            <View style={{marginTop: 18, marginLeft: 10, marginRight: 10}}>
              <Text>【投稿する際の注意点】</Text>
              <Text style={{marginTop: 8, color: '#D37D85'}}>以下マイクロプレスリリースを必ず記載しご投稿ください。</Text>
              <Text style={{color: '#D37D85'}}>アカウントのタグ付けがある場合は、メンションを有効にし、 必ず記載してください。</Text>
              <Text style={{color: '#D37D85'}}>アカウントが有効化されてないと、棄却対象の対象となってしまいます。必ず有効かどうか確認してからご投稿ください。</Text>
            </View>
            <View style={{marginTop: 40}}>
              <Text style={{textAlign: 'center', color: '#3DC0B1'}}>InstagramかTwitterか選んでね!</Text>
            </View>
            <Tabbar/>
        </View>
      </View>
    </View>
  );
}
