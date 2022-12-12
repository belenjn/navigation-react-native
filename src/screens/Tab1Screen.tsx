import React from 'react';
import {Text, View} from 'react-native';
import {useEffect} from 'react';
import {styles, colors} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const Tab1Screen = () => {
  const {top} = useSafeAreaInsets();

  useEffect(() => {
    console.log('Tab 1 screen');
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Icons</Text>
      <Icon
        name="airplane-outline"
        size={80}
        color={colors.primary}
        style={{...styles.globalMargin, marginTop: top}}
      />
      <Icon
        name="attach-outline"
        size={80}
        color={colors.primary}
        style={{...styles.globalMargin, marginTop: top}}
      />
      <Icon
        name="bonfire-outline"
        size={80}
        color={colors.primary}
        style={{...styles.globalMargin, marginTop: top}}
      />
      <Icon
        name="calculator-outline"
        size={80}
        color={colors.primary}
        style={{...styles.globalMargin, marginTop: top}}
      />
      <Icon
        name="flower-outline"
        size={80}
        color={colors.primary}
        style={{...styles.globalMargin, marginTop: top}}
      />
      <Icon
        name="leaf-outline"
        size={80}
        color={colors.primary}
        style={{...styles.globalMargin, marginTop: top}}
      />
    </View>
  );
};
