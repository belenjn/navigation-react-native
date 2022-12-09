/* eslint-disable react-hooks/exhaustive-deps */
import {CommonActions, useNavigation} from '@react-navigation/core';
import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';

export const Page2Screen = () => {
  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      title: 'Hola Mundo',
      headerBackTitle: 'Back', // Boton de regreso en la flecha de atras
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page2Screen</Text>
      <Button
        title="Go to Page 3"
        onPress={() =>
          navigator.dispatch(CommonActions.navigate({name: 'Page3Screen'}))
        }
      />
    </View>
  );
};
