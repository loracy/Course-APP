import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';

import CourseScreen from './Course';
import EditInfoScreen from './EditInfo';
import SettingScreen from './Setting';
import AddScreen from './Add';


export class HomeSreen extends React.Component {
  static navigationOptions = {
    title: '課表',
  };
  render() {
    const { navigate } = this.props.navigation;
    const { goBack } = this.props.navigation;
    const { firstRowBox, boxWeek, blank, box1, boxTime, boxTimeNo, boxTimes, btnCourse } = styles;
    return (
      <View style={{ position: 'relative' }}>
      <View style={{ flexDirection: 'row' }}>
            
            <View style={{ flexDirection: 'column' }}>
                <Text style={blank} />
                <View style={boxTime}><Text style={boxTimes}>08:10</Text><Text style={boxTimeNo}>1</Text><Text style={boxTimes}>09:00</Text></View>
                <View style={boxTime}><Text style={boxTimes}>09:05</Text><Text style={boxTimeNo}>2</Text><Text style={boxTimes}>09:55</Text></View>
                <View style={boxTime}><Text style={boxTimes}>10:15</Text><Text style={boxTimeNo}>3</Text><Text style={boxTimes}>11:05</Text></View>
                <View style={boxTime}><Text style={boxTimes}>11:10</Text><Text style={boxTimeNo}>4</Text><Text style={boxTimes}>12:00</Text></View>
                <View style={boxTime}><Text style={boxTimes}>13:30</Text><Text style={boxTimeNo}>5</Text><Text style={boxTimes}>14:20</Text></View>
                <View style={boxTime}><Text style={boxTimes}>14:25</Text><Text style={boxTimeNo}>6</Text><Text style={boxTimes}>15:15</Text></View>
                <View style={boxTime}><Text style={boxTimes}>15:35</Text><Text style={boxTimeNo}>7</Text><Text style={boxTimes}>16:25</Text></View>
                <View style={boxTime}><Text style={boxTimes}>16:30</Text><Text style={boxTimeNo}>8</Text><Text style={boxTimes}>17:20</Text></View>
            </View>
            
            <View style={{ flexDirection: 'column' }}>
              <View style={firstRowBox}><Text style={boxWeek}>週一</Text></View>
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
            </View>
            
            <View style={{ flexDirection: 'column' }}>
              <View style={firstRowBox}><Text style={boxWeek}>週二</Text></View>
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
            </View>

            <View style={{ flexDirection: 'column' }}>
              <View style={firstRowBox}><Text style={boxWeek}>週三</Text></View>
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
            </View>
            
            <View style={{ flexDirection: 'column' }}>
              <View style={firstRowBox}><Text style={boxWeek}>週四</Text></View>
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
            </View>

            <View style={{ flexDirection: 'column' }}>
              <View style={firstRowBox}><Text style={boxWeek}>週五</Text></View>
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
            </View>
        </View>
        <View style={btnCourse}>
          <Button
             title='運動按摩'
             onPress={() => navigate('Course')}
             backgroundColor='#6fa8dc'
             buttonStyle={{ position: 'relative', width: 65, height: 210, marginLeft: 0, padding: 3 }}
             color='#000000'
             fontSize={14}
            />
            <Button 
              title='C634'
              backgroundColor='#0a8ac4'
              buttonStyle={{ position: 'absolute', bottom: 0, width: 65, height: 25, marginLeft: 0, padding: 3 }}
              fontSize={14}
            />
        </View>
        </View>
    );     
  }
}


const styles = StyleSheet.create({
     firstRowBox: {
        backgroundColor: '#545454',
        justifyContent: 'center',
        width: 65,
        height: 42,
        borderWidth: 0.5,
    },
    blank: {
        backgroundColor: '#545454',
        width: 50,
        height: 42,
    },
    boxWeek: {
      color: '#ffffff',
      textAlign: 'center',
    },
    box1: {
        backgroundColor: '#f3f3f3',
        borderWidth: 0.5,
        width: 65,
        height: 70,
        textAlign: 'center',
        color: '#545454',
    },
    boxTime: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 70,
        borderWidth: 0.5,
        backgroundColor: '#f3f3f3',
    },
    boxTimeNo: {
      fontSize: 19,
      fontWeight: '500',
    },
    boxTimes: {
      fontSize: 12,
      fontWeight: '200',
    },
    btnCourse: {
      position: 'absolute',
      left: 115,
      top: 112,
    }
});


export const Header = StackNavigator({
  Home: { screen: HomeSreen, 
    navigationOptions: {
      header: ({ navigate }) => ({
        right: (
          <Icon
            name='add'
            iconStyle={{ marginRight: 15 }}
            onPress={() => navigate('Add')}
          />
        ),
        left: (
          <Icon
          name='settings'
          iconStyle={{ marginLeft: 15 }}
          onPress={() => navigate('Setting')}
          />
        ),
      })
    },
  },
  Course: { 
    screen: CourseScreen,
    navigationOptions: {
      header: ({ navigate }) => ({
        tintColor: '#ffffff',
        style: { backgroundColor: '#6fa8dc' },
        title: '運動按摩',
        right: (
          <Icon
            name='edit'
            iconStyle={{ 
              marginRight: 10,
              color: '#ffffff',
            }}
            onPress={() => navigate('EditInfo')}
          />
        ),
      })
    },
  },
  EditInfo: {
    screen: EditInfoScreen,
    navigationOptions: {
      header: ({ goBack }) => ({
        title: '編輯課程',
        tintColor: '#ffffff',
        style: { backgroundColor: '#6fa8dc' },
        left: (
          <Button
            onPress={() => goBack(null)} 
            title='取消'
            backgroundColor='#6fa8dc'
            buttonStyle={{ paddingLeft: 0 }}
            />
         ),
         right: (
            <Button
            onPress={() => goBack(null)} 
            title='確定'
            backgroundColor='#6fa8dc'
            buttonStyle={{ paddingRight: 0 }}
            />
         ),
      })
    }
  },
  Setting: {
    screen: SettingScreen,
    navigationOptions: {
      header: () => ({
        title: '設定',
      })
    }
  },
  Add: {
    screen: AddScreen,
    navigationOptions: {
      header: ({ goBack }) => ({
        title: '新增課程',
        left: (
            <Icon
              name='clear'
              iconStyle={{ marginLeft: 10 }}
              color='red'
              onPress={() => { goBack(); }}
            />
        ),
        right: (
            <Icon 
              name='done'
              iconStyle={{ marginRight: 10 }}
              color='green'
              onPress={() => { goBack(); }}
            />
        ),
      })
    }
  }

});


