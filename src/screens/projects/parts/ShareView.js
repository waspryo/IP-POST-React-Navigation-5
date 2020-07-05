import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import Post from 'react-native-vector-icons/Feather';
import { styles } from '../../../styles/fan/projects/project';

import Tabbar from './Tabbar';
import HowToUse from './HowToUse';
import PostModal from './PostModal';

const win = Dimensions.get('window');

class ShareView extends React.Component {

  render() {
    return (
      <View style={{ margin: 10, flex: 1 }}>
        <View style={styles.ShareViewContainer}>
          <View style={styles.ShareViewContainerOfInner}>
            <Text style={{ color: 'white', textAlign: 'center', fontSize: 16 }}> SNSでプレスリリースをシェアしよう！</Text>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
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
              }} />
            <View style={{ flexDirection: 'row', margin: 10, alignItems: 'center' }}>
              <View style={{ backgroundColor: '#3DC0B1', flexDirection: 'column', marginRight: 10, borderRadius: 4, padding: 3 }}>
                <Text style={styles.ShareViewStep1}>STEP</Text>
                <Text style={styles.ShareViewStep1}>01</Text>
              </View>
              <View>
                <Text style={{ color: '#3DC0B1', fontWeight: 'bold' }}>投稿するマイクロプレスリリースを</Text>
                <Text style={{ color: '#3DC0B1', fontWeight: 'bold' }}>コピーしよう！</Text>
              </View>
            </View>
            <Text style={{ margin: 10 }}>下記マイクロプレスリリースをコピーして投稿に利用してください。自分のコメントを追記してもOK！</Text>
            <Text style={{ textAlign: 'center', color: '#3DC0B1', marginTop: 8 }}>＞より多くのポイントをゲットするには？</Text>
            <View style={{ marginTop: 18, marginLeft: 10, marginRight: 10 }}>
              <Text>【投稿する際の注意点】</Text>
              <Text style={{ marginTop: 8, color: '#D37D85' }}>以下マイクロプレスリリースを必ず記載しご投稿ください。</Text>
              <Text style={{ color: '#D37D85' }}>アカウントのタグ付けがある場合は、メンションを有効にし、 必ず記載してください。</Text>
              <Text style={{ color: '#D37D85' }}>アカウントが有効化されてないと、棄却対象の対象となってしまいます。必ず有効かどうか確認してからご投稿ください。</Text>
            </View>
            <View style={{ marginTop: 40 }}>
              <Text style={{ textAlign: 'center', color: '#3DC0B1' }}>InstagramかTwitterか選んでね!</Text>
            </View>
            <Tabbar />
            <View style={{ flexDirection: 'row', margin: 10, alignItems: 'center' }}>
              <View style={{ backgroundColor: '#3DC0B1', flexDirection: 'column', marginRight: 10, borderRadius: 4, padding: 3 }}>
                <Text style={styles.ShareViewStep1}>STEP</Text>
                <Text style={styles.ShareViewStep1}>02</Text>
              </View>
              <Text style={{ color: '#3DC0B1', fontWeight: 'bold' }}>投稿する画像はこれを使ってね！</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Image style={{
                width: 320,
                resizeMode: 'contain',
                height: 220
              }}
                source={require('../../../../assets/デジモン4.jpg')} />
            </View>
            <View style={{ flexDirection: 'row', margin: 10, alignItems: 'center' }}>
              <View style={{ backgroundColor: '#3DC0B1', flexDirection: 'column', marginRight: 10, borderRadius: 4, padding: 3 }}>
                <Text style={styles.ShareViewStep1}>STEP</Text>
                <Text style={styles.ShareViewStep1}>03</Text>
              </View>
              <Text style={{ color: '#3DC0B1', fontWeight: 'bold' }}>投稿が完了したら報告しよう！</Text>
            </View>
            <View style={{ marginTop: 18, marginLeft: 10, marginRight: 10 }}>
              <Text>EMERALD POST に投稿したことを報告しよう！先着で1,000円＋ポイント、全員にポイントがもらえるよ！</Text>
            </View>
            <View style={{ margin: 20, justifyContent: 'center', alignItems: 'center', }}>
              <PostModal passPropsToModal={this.props}/>
            </View>
            <View style={{ marginTop: 18, marginLeft: 10, marginRight: 10 }}>
              <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>プレスリリース原文</Text>
              <Text>参考情報としてご覧ください。</Text>
            </View>
            <View style={{ marginTop: 18, marginLeft: 10, marginRight: 10 }}>
              <Text>母の日・父の日キャンペーン開催！
              #今だからこそ伝えたいありがとう
              みなさん、#おうち時間   どのようにお過ごしですか？
              こんな状況だからこそ、なかなか会えない友達と話したり、
              仕事で普段コミュニケーションがあまりとれない家族と料理やゲームをしたり、
              ネガティブな事だけではなく、ポジティブな出来事もたくさんあると思います！もうすぐ、母の日と父の日。
              こんな時だからこそ、改めて両親へ「ありがとう」を伝えませんか？
              EMERALD POSTでは、母の日と父の日に「ありがとう」を伝えるみなさんをお手伝いするキャンペーンを実施します！
              【STAYHOME】#今だからこそ伝えたいありがとう　キャンペーン！
              キャンペーンに参加いただいた方の中から抽選で2名様に
              5,000円分のギフト券をプレゼント！（ECサイトでご利用いただけます）是非ご両親が喜ぶプレゼントをお渡ししてくださいね
              </Text>
            </View>
            <HowToUse />
          </View>
        </View>
      </View>
    );
  }
}
export default ShareView