import React, { Component } from 'react';
import { ScrollView, TouchableOpacity, Image } from 'react-native';
import { Tile, List, ListItem, FormLabel, FormInput } from 'react-native-elements';

// Make a component
class Add extends Component {
  render() {
    return (
      <ScrollView>
        {/*<FormLabel>標題</FormLabel>
        <FormInput
        ref='forminput'
        textInputRef='email'/>*/}
        {/*<FormValidationMessage>Error message</FormValidationMessage>*/}
        <List>

          <ListItem
            title="名稱"
            rightTitle="輸入課堂名稱"
            hideChevron
          />
          <ListItem
            title="老師"
            rightTitle="輸入老師姓名"
            hideChevron
          />
          <ListItem
            title="教室"
            rightTitle="輸入教室位置"
            hideChevron
          />
          <ListItem
            title="學分"
            rightTitle="0"
            hideChevron
          />
          <ListItem
            title="顏色"
            // hideChevron
            rightIcon={{
                name: 'turned-in',
                color: '#43CAD7'
              }}
          />
        </List>

        <List>
          <ListItem
            title="通知"
            rightTitle={'15分鐘前'}
          />
          <ListItem
            title="重複"
            rightTitle={'每週'}
          />
          <ListItem
            title="重複結束"
            rightTitle={'2017 6月30日 週五'}
          />
        </List>

        <List>
          <ListItem
            title="備註"
            hideChevron
            containerStyle={{ paddingBottom: 100, paddingTop: 15 }}
          />
        </List>
      </ScrollView>
    );
  }
}


export default Add;
