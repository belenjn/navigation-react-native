/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Tab1Screen} from '../screens/Tab1Screen';
import {StackNavigator} from './StackNavigator';
import {colors} from '../theme/appTheme';
import {Platform, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {TopTabNavigator} from './TopTabNavigator';

let iconName: string;

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />;
};

const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: colors.primary,
      }}
      defaultScreenOptions={({route}) => ({
        tabBarIcon: ({color, focused}) => {
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'airplane-outline';
              break;

            case 'Tab2Screen':
              iconName = 'chatbox-ellipses-outline';
              break;

            case 'StackNavigator':
              iconName = 'map-outline';
              break;
          }
          return <Icon name={iconName} size={20} color={color} />;
        },
      })}>
      <BottomTabAndroid.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab 1',
        }}
        component={Tab1Screen}
      />
      <BottomTabAndroid.Screen
        name="Tab2Screen"
        options={{title: 'Tab 2'}}
        component={TopTabNavigator}
      />
      <BottomTabAndroid.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </BottomTabAndroid.Navigator>
  );
};

const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
      }}
      defaultScreenOptions={({route}) => ({
        tabBarIcon: ({color, focused}) => {
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'airplane-outline';
              break;

            case 'Tab2Screen':
              iconName = 'chatbox-ellipses-outline';
              break;

            case 'StackNavigator':
              iconName = 'map-outline';
              break;
          }
          return <Icon name={iconName} size={20} color={color} />;
        },
      })}>
      {/* <Tab.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab 1',
          tabBarIcon: props => <Text style={{color: props.color}}>T1</Text>,
        }}
        component={Tab1Screen}
      /> */}
      <BottomTabIOS.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab 1',
        }}
        component={Tab1Screen}
      />
      <BottomTabIOS.Screen
        name="Tab2Screen"
        options={{title: 'Tab 2'}}
        component={TopTabNavigator}
      />
      <BottomTabIOS.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </BottomTabIOS.Navigator>
  );
};
