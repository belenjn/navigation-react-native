import React from 'react';
import {Text, View} from 'react-native';
import {useEffect} from 'react';
import {styles} from '../theme/appTheme';
import {TouchableIcon} from '../components/TouchableIcon';

export const Tab1Screen = () => {
  useEffect(() => {
    console.log('Tab 1 screen');
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Icons</Text>
      <TouchableIcon iconName="airplane-outline" />
      <TouchableIcon iconName="attach-outline" />
      <TouchableIcon iconName="bonfire-outline" />
      <TouchableIcon iconName="calculator-outline" />
      <TouchableIcon iconName="flower-outline" />
      <TouchableIcon iconName="leaf-outline" />
    </View>
  );
};
