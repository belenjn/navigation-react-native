import {CommonActions, useNavigation} from '@react-navigation/core';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';

export const Page2Screen = () => {
  const navigator = useNavigation();

  return (
    <View style={styles.globalMargin}>
      <Text>Page2Screen</Text>
      <Button
        title="Go to Page 3"
        onPress={() =>
          navigator.dispatch(CommonActions.navigate({name: 'Page3Screen'}))
        }
      />
    </View>
  );
};
