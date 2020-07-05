import React from 'react';
import { View } from 'react-native';
import { List } from 'react-native-paper';

export default function AccordionGroup() {
  return (
    <View style={{ marginTop: 50 }}>
      <List.AccordionGroup>
        <List.Accordion
          style={{ borderColor: 'black' }}
          left={props => <List.Icon {...props} icon="rocket" />}
          title="最新情報" id="1"
        >
          <List.Item
            style={{ marginLeft: 60 }}
            left={props => <List.Icon {...props} icon="instagram" />}
            title="Instagram" />
          <List.Item
            style={{ marginLeft: 60 }}
            left={props => <List.Icon {...props} icon="twitter" />}
            title="Twitter" />
        </List.Accordion>
        <List.Accordion
          left={props => <List.Icon {...props} icon="account-heart-outline" />}
          title="サポート" id="2">
          <List.Item title="運営元" />
          <List.Item title="お問い合わせ" />
          <List.Item title="利用規約" />
        </List.Accordion>
        <View>
          <List.Accordion
            left={props => <List.Icon {...props} icon="bell" />}
            title="その他" id="3">
            <List.Item title="Nothing so far" />
          </List.Accordion>
        </View>
      </List.AccordionGroup>
    </View>
  );
}
