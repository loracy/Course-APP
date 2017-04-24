import React, { Component } from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import ContentScreen from './Content';
import ContentTwoScreen from './ContentTwo';
import ContentThreeScreen from './ContentThree';


export const ContentStack = StackNavigator({
  Content: {
    screen: ContentScreen,
  },
});

export const ContentTwoStack = StackNavigator({
  ContentTwo: {
    screen: ContentTwoScreen,
  },
});

export const ContentThreeStack = StackNavigator({
  Setting: {
    screen: ContentThreeScreen,
  },
}); 

export const TabRouter = TabNavigator(
  {
    ContentStack: {
      screen: ContentStack,
      navigationOptions: {
        tabBar: {
          label: '課程資訊',
        },
      },
    },
    ContentTwoStack: {
      screen: ContentTwoStack,
      navigationOptions: {
        tabBar: {
          label: '待辦事項',
        },
      },
    },
    ContentThreeStack: {
      screen: ContentThreeStack,
      navigationOptions: {
        tabBar: {
          label: '出席率',
        },
      },
    },
  },
  {
    animationEnabled: 'true',
  }
);

