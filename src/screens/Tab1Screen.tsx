import React from 'react';
import {Text, View} from 'react-native';
import {useEffect} from 'react';
import {styles} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tab1Screen = () => {
  useEffect(() => {
    console.log('Tab 1 screen');
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Icons</Text>
      <Icon name="airplane-outline" size={30} />
    </View>
  );
};
