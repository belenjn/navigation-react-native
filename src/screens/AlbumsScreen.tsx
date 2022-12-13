import React, {useContext} from 'react';
import {Button, View} from 'react-native';
import {Text} from 'react-native-paper';
import {AuthContext} from '../context/AuthContext';
import {styles} from '../theme/appTheme';

export const AlbumsScreen = () => {
  const {logOut, authState} = useContext(AuthContext);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Albums Screen</Text>
      {authState.isLoggedIn && <Button title="Sign in" onPress={logOut} />}
    </View>
  );
};
