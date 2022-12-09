import React from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {StackScreenProps} from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {}

export const Page3Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page3Screen</Text>
      <Button title="Come back" onPress={() => navigation.pop()} />
      <Button title="Go to home" onPress={() => navigation.popToTop()} />
    </View>
  );
};
