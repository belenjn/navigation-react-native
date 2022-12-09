/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Button, Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../theme/appTheme';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props extends StackScreenProps<any, any> {}

export const Page1Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page1Screen</Text>
      <Button
        title="Go to Page 2"
        onPress={() => navigation.navigate('Page2Screen')}
      />

      <Text>Navigate with arguments</Text>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('PersonScreen', {
              id: 1,
              name: 'Dexter',
            })
          }
          style={{...styles.button, backgroundColor: '#5856d6'}}>
          <Text style={styles.bigButtonText}>Dexter</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('PersonScreen', {
              id: 2,
              name: 'Dani',
            })
          }
          style={{...styles.button, backgroundColor: '#ff9427'}}>
          <Text style={styles.bigButtonText}>Dani</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
